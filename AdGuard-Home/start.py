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
    wFile = open("e:/Git/AdGuard-Home-Filters/AdGuard-Home/Aelisya's-Protect.abp", "w")
    for line in Final:
        wFile.write(line)
    wFile.close()

#generate lists
fold = "e:/Git/AdGuard-Home-Filters/AdGuard-Home/Sources/"
head = listify(fold+"head.aelisya")
ltld = listify(fold+"tld.dmn")
lsecu = listify(fold+"security-rules.dmn")
lstar = listify(fold+"star-one.dmn")
lfull = listify(fold+"personal-domains.dmn")
lfull.extend(listify(fold+"parked-domains.dmn"))
lfull.extend(listify(fold+"services-lock.dmn"))
lfull.extend(listify(fold+"safesearch-enforce.dmn"))
lfull.extend(listify(fold+"google-lock-light.dmn"))
lfull.extend(listify(fold+"bypass-protection.dmn"))
lfull.extend(listify(fold+"gdpr-451.dmn"))
lfull.extend(listify(fold+"nsa-block.dmn"))
lfull.extend(listify(fold+"qanon.dmn"))

Final=[]
for line in head:
    Final.append(line+"\n")
Final.append("! Last modified: "+str(date.today())+"\n")
for line in lsecu:
    Final.append(line+"\n")
for line in lstar:
    Final.append("||"+line+"^\n")
for line in ltld:
    Final.append("||*."+line+"^\n")
for line in lfull:
    chktld = get_tld(line, fix_protocol=True, as_object=True)
    if search(ltld,chktld.tld) == False:
        Final.append("||"+line+"^\n")
writeResult(Final)
print("Success with "+str(len(Final))+" lines")