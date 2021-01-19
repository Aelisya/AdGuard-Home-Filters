from datetime import date
import json

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
    duplicate = 0
    for i in list:
        if i not in seen:
            for i3 in ltld:
                if i not in seen and i.endswith(i3 + "^\n") == False:
                    unduplicated.append(i)
                    seen.add(i)
                    break
                elif i.endswith(i3 + "^\n"):
                    duplicate += 1
        else:
            duplicate += 1
    print(str(duplicate) + " duplicate removed")
    return unduplicated

# Import sources and listify them
scriptPath = "e:/Git/AdGuard-Home-Filters/AdGuard-Home/"
sources = importJson()
fold = scriptPath + sources['folder']
ext = "." + sources['file-ext']

head = listify(fold + sources['head'] + ext)
ltld = listify(fold + sources['tld'] + ext)
lsecu = listify(fold + sources['secu'] + ext)

lfull = []
for i in sources['domain']:
    lfull.extend(listify(fold + i['name'] + ext))

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

finalTab = []
for line in toDedup:
    if line != "":
        finalTab.append(line)

print("Deduplication ...")
final = deduplicate(finalTab)

writeResult(final, "Aelisya's-Protect-Basic")