from tld import get_tld, get_fld, is_tld
from datetime import date
import json, urllib.request

# import sources
def importJson():
    with open(scriptPath + 'src.json') as src:
        return json.load(src)

#search function
def search(list, searched):
    for i in range(len(list)):
        if list[i] == searched:
            return True
    return False

#transform a file in list
def listify(filename):
    destlist = []
    file = open(filename, "r")
    for line in file:
        ltemp = line.replace("\n", "")
        destlist.append(ltemp)
    file.close()
    return destlist

#write the result to the file
def writeResult(Final, name):
    wFile = open(scriptPath + name + ".abp", "w")
    for line in Final:
        wFile.write(line)
    wFile.close()

# remove duplicate
def deduplicate(list):
    seen = set()
    duped = set()
    deduped = []
    dupli = 0
    for i in list:
        if i not in seen:
            deduped.append(i)
            if i not in duped:
                for i2 in lstar:
                    if i.startswith("||" + i2 + ".") == True:
                        deduped.remove(i)
                        dupli += 1
                        duped.add(i)
            seen.add(i)
        else:
            dupli += 1
    print(str(dupli) + " duplicate removed")
    return deduped
    

#download, read, uncomment, remove whitelist from url blocklist
def external(i):
    templist = []
    for line in urllib.request.urlopen(i):
        ltemp = str(line, 'utf-8')
        if ltemp == ltemp.replace("!", ""): #if the result of uncomment is the same to the original it's not commented line
            if ltemp == ltemp.replace("@@", ""): #if the result of unwhitelist is the same to the original it's not a whitelist line
                templist.append(ltemp)
    return templist

# Import sources and listify them
scriptPath = "e:/Git/AdGuard-Home-Filters/AdGuard-Home/"
sources = importJson()
fold = scriptPath + sources['folder']
ext = "." + sources['file-ext']
head = listify(fold + sources['head'] + ext)
ltld = listify(fold + sources['tld'] + ext)
lsecu = listify(fold + sources['secu'] + ext)
lstar = listify(fold + sources['star'] + ext)

lfull = []
for i in sources['domain']:
    lfull.extend(listify(fold + i['name'] + ext))

extern = []
for i in sources['external']:
    extern.extend(external(i['url']))

# generate the full list and write it
toDedup = []
for line in head:
    toDedup.append(line + "\n")
toDedup.append("! Last modified: " + str(date.today()) + "\n")
for line in lsecu:
    toDedup.append(line + "\n")
for line in ltld:
    toDedup.append("||*." + line + "^\n")
for line in lfull:
    chktld = get_tld(line, fix_protocol=True, as_object=True)
    if search(ltld,chktld.tld) == False:
        toDedup.append("||" + line + "^\n")
little = deduplicate(toDedup)
for line in extern:
    toDedup.append(line)
final = deduplicate(toDedup)
for line in lstar:
    little.append("|" + line + ".*^\n")
    final.append("|" + line + ".*^\n")

writeResult(little, "Aelisya's-Protect")
writeResult(final, "Aelisya's-Protect-Full")

print("There are " + str(len(little)-5) + " unique rules in normal")
print("There are " + str(len(final)-5) + " unique rules in full")