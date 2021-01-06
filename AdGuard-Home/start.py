from tld import get_tld, get_fld, is_tld
from datetime import date

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
    wFile = open("Aelisya's-Protect.abp", "w")
    for line in Final:
        wFile.write(line)
    wFile.close()

#generate lists
numberoftld=0
head = listify("Sources/head.aelisya")
ltld = listify("Sources/tld.dmn")
lsecu = listify("Sources/security-rules.dmn")
lfull = listify("Sources/personal-domains.dmn")
lfull.extend(listify("Sources/parked-domains.dmn"))
lfull.extend(listify("Sources/services-lock.dmn"))
lfull.extend(listify("Sources/safesearch-enforce.dmn"))
lfull.extend(listify("Sources/google-lock-light.dmn"))
lfull.extend(listify("Sources/bypass-protection.dmn"))
lfull.extend(listify("Sources/gdpr-451.dmn"))
lfull.extend(listify("Sources/nsa-block.dmn"))
lfull.extend(listify("Sources/qanon.dmn"))

Final=[]
for line in head:
    Final.append(line+"\n")
Final.append("! Last modified: "+str(date.today())+"\n")
for line in lsecu:
    Final.append(line+"\n")
for line in ltld:
    Final.append("||*."+line+"^\n")
for line in lfull:
    chktld = get_tld(line, fix_protocol=True, as_object=True)
    if search(ltld,chktld.tld) == False:
        Final.append("||"+line+"^\n")
writeResult(Final)
print("Success with "+str(len(Final))+" rules")