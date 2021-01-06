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
lNsaBlock = listify("test.dmn")


final=[]
print(lNsaBlock)
for line in lNsaBlock:
    chktld = get_tld(line, fix_protocol=True, as_object=True)
    if search(ltld,chktld.tld) == False:
        final.append(line)
print(final)