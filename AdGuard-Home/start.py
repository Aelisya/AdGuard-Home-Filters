#!/usr/bin/python
from datetime import date
import json, gc

def importJson():
    with open(scriptPath + 'src.json') as file:
        return json.load(file)

def listify(filename):
    destlist = []
    with open(filename) as file:
        for line in file:
            ltemp = line.replace("\n", "")
            destlist.append(ltemp)
    del ltemp
    return destlist

def writeResult(Final, name):
    with open(scriptPath + name + '.abp', 'w') as file:
        for line in Final:
            file.write(line)
    print("There are " + str(len(Final)-5) + " unique rules in " + name)

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
    del seen
    return unduplicated

scriptPath = "e:/Git/AdGuard-Home-Filters/AdGuard-Home/"
sources = importJson()
fold = scriptPath + sources['folder']
ext = "." + sources['file-ext']

head = listify(fold + sources['head'] + ext)
ltld = listify(fold + sources['tld'] + ext)
lsecu = listify(fold + sources['secu'] + ext)
ldom = sources['domain']
del sources

lfull = []
for i in ldom:
    lfull.extend(listify(fold + i['name'] + ext))
del ldom, fold, ext

toDedup = []
for line in head:
    toDedup.append(line + "\n")
toDedup.append("! Last modified: " + str(date.today()) + "\n")
del head

for line in lsecu:
    toDedup.append(line + "\n")
del lsecu

for line in lfull:
    toDedup.append("||" + line + "^\n")
del lfull

for line in ltld:
    toDedup.append("||*." + line + "^\n")

finalTab = []
for line in toDedup:
    if line != "":
        finalTab.append(line)
del toDedup

print("Deduplication ...")
final = deduplicate(finalTab)
del finalTab

writeResult(final, "Aelisya's-Protect-Basic")
del final, scriptPath
gc.collect()
print("Done Have a nice Day !")