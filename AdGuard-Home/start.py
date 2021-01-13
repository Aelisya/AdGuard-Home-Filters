from datetime import date
import json, urllib.request

# import sources
def importJson():
    with open(scriptPath + 'src.json') as src:
        return json.load(src)

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
    print("There are " + str(len(Final)-5) + " unique rules in " + name)

# remove duplicate
def deduplicate(list):
    unduplicated = []
    seen = set()
    lstarDuplicate = 0
    ltldDuplicate = 0
    normalDuplicate = 0

    for i in list:
        if i not in seen:
            unduplicated.append(i)
            patched = False
            for i3 in ltld:
                if patched == False and i.endswith(i3 + "^\n"):
                    unduplicated.remove(i)
                    ltldDuplicate += 1
                    patched = True
                    seen.add(i)
                    break
            if patched == False:
                for i2 in lstar:
                    if patched == False and i.startswith("||" + i2 + "."):
                        unduplicated.remove(i)
                        lstarDuplicate += 1
                        patched = True
                        seen.add(i)
                        break
        else:
            normalDuplicate += 1
    print("lstar duplicate: " + str(lstarDuplicate) + "\nltld duplicate: " + str(ltldDuplicate) + "\nNormal Duplicate: " + str(normalDuplicate) + "\nTotal duplicate: " + str(lstarDuplicate + ltldDuplicate))
    return unduplicated
    

#download, read, uncomment, remove whitelist from url blocklist
def external(i):
    templist = []
    for line in urllib.request.urlopen(i['url']):
        ltemp = str(line, 'utf-8')
        if ltemp == ltemp.replace("!", ""): #if the result of uncomment is the same to the original it's not commented line
            if ltemp == ltemp.replace("@@", ""): #if the result of unwhitelist is the same to the original it's not a whitelist line
                if ltemp == ltemp.replace("#", ""):
                    if i['format'] == "dmn" and ltemp != "":
                        ltemp = "||" + ltemp.replace("\n", "") + "^\n"
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
    print(i['name'])
    extern.extend(external(i))

# generate the full list and write it
toDedup = []
for line in head:
    toDedup.append(line + "\n")
toDedup.append("! Last modified: " + str(date.today()) + "\n")

for line in lsecu:
    toDedup.append(line + "\n")

for line in lfull:
    toDedup.append("||" + line + "^\n")

for line in ltld:
    toDedup.append("||*." + line + "^\n")
    
for line in lstar:
    toDedup.append("|" + line + ".*^\n")

for line in extern:
    toDedup.append(line)

print("Download done.")
final = deduplicate(toDedup)

writeResult(toDedup, "Aelisya's-Protect-Basic")