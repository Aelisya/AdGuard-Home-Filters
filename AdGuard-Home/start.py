from tld import get_tld, get_fld, is_tld
from datetime import date
import json

# import sources
def importJson():
    with open(scriptPath+'src.json') as src:
        return json.load(src)

#search function
def search(list, searched):
    for i in range(len(list)):
        if list[i] == searched:
            return True
    return False

#transform a file in list
def listify(filename):
    destlist=[]
    file = open(filename,"r")
    for line in file:
        ltemp=line.replace("\n","")
        destlist.append(ltemp)
    file.close()
    return destlist

def writeResult(Final):
    wFile = open(scriptPath+"Aelisya's-Protect.abp", "w")
    for line in Final:
        wFile.write(line)
    wFile.close()

# remove duplicate
def deduplicate(list):
    seen = set()
    deduped = []
    for i in list:
        if i not in seen:
            deduped.append(i)
            seen.add(i)
    return deduped

# Import sources and listify them
scriptPath = "e:/Git/AdGuard-Home-Filters/AdGuard-Home/"
sources = importJson()
fold = scriptPath + sources['folder']
ext = "."+sources['file-ext']
head = listify(fold+sources['head']+ext)
ltld = listify(fold+sources['tld']+ext)
lsecu = listify(fold+sources['secu']+ext)
lstar = listify(fold+sources['star']+ext)
lfull = []
for i in sources['domain']:
    lfull.extend(listify(fold+i['name']+ext))

# generate the full list and write it
toDedup=[]
for line in head:
    toDedup.append(line+"\n")
toDedup.append("! Last modified: "+str(date.today())+"\n")
for line in lsecu:
    toDedup.append(line+"\n")
for line in lstar:
    toDedup.append("||"+line+".*^\n")
for line in ltld:
    toDedup.append("||*."+line+"^\n")
for line in lfull:
    chktld = get_tld(line, fix_protocol=True, as_object=True)
    if search(ltld,chktld.tld) == False:
        toDedup.append("||"+line+"^\n")

final = deduplicate(toDedup)
writeResult(final)
print("Success with "+str(len(final)-5)+" rules")