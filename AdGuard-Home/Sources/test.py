from tld import get_tld, get_fld, is_tld

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
    file.close
    return destlist

#generate lists
numberoftld=0
ltld = listify("tld.dmn")
lsecu = listify("security-rules.dmn")
lfull = listify("personal-domains.dmn")
lfull.extend(listify("parked-domains.dmn"))
lfull.extend(listify("services-lock.dmn"))
lfull.extend(listify("safesearch-enforce.dmn"))
lfull.extend(listify("google-lock-light.dmn"))
lfull.extend(listify("bypass-protection.dmn"))
lfull.extend(listify("gdpr-451.dmn"))
lfull.extend(listify("nsa-block.dmn"))
lfull.extend(listify("qanon.dmn"))


final=[]
tt=0
for line in lfull:
    chktld = get_tld(line, fix_protocol=True, as_object=True)
    if search(ltld,chktld.tld) == False:
        final.append(line)
        tt+=1
print(tt)