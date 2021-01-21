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
            destlist.append(line.replace("\n", ""))
    return destlist

def writeResult(Final, name):
    with open(scriptPath + name + '.abp', 'w') as file:
        for line in Final:
            file.write(line)
    print("There are " + str(len(Final)-5) + " unique rules in " + name)

def deduplicate(list):
    unduplicated = []
    seen = set()
    for i in list:
        if i not in seen:
            for i3 in generatelink(2):
                if i not in seen and i.endswith(i3 + "^\n") == False:
                    unduplicated.append(i)
                    seen.add(i)
                    break
    return unduplicated

def generatelink(asked):
    if asked == 1:
        return listify(fold + sources['head'] + ext) #head
    elif asked == 2:
        return listify(fold + sources['secu'] + ext) #lsecu
    elif asked == 3:
        return listify(fold + sources['tld'] + ext) #ltld
    elif asked == 4:
        return sources['domain'] #ldom

scriptPath = "e:/Git/AdGuard-Home-Filters/AdGuard-Home/"
sources = importJson()
fold = scriptPath + sources['folder']
ext = "." + sources['file-ext']
lfull = []
toDedup = []
finalTab = []

for line in generatelink(1):
    toDedup.append(line + "\n")
toDedup.append("! Last modified: " + str(date.today()) + "\n")

for line in generatelink(2):
    toDedup.append(line + "\n")

for line in generatelink(3):
    toDedup.append("||*." + line + "^\n")

for i in generatelink(4):
    lfull.extend(listify(fold + i['name'] + ext))

for line in lfull:
    toDedup.append("||" + line + "^\n")
del lfull

for line in toDedup:
    if line != "" and line != " ":
        finalTab.append(line)
del toDedup

final = deduplicate(finalTab)
del sources, fold, ext, finalTab

writeResult(final, "Aelisya's-Protect-Basic")
del final, scriptPath
gc.collect()