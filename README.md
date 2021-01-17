![OSSAR](https://github.com/michaelb-ae/AdGuard-Home-Filters/workflows/OSSAR/badge.svg)![CodeQL](https://github.com/michaelb-ae/AdGuard-Home-Filters/workflows/CodeQL/badge.svg)
# AdGuard-Home-Filters
Many list with ABP Syntax for AdGuard Home DNS blocking.

## AdGuard Home API
I have enabled Parental Control and SafeBrowsing.

## AND what list do you use ?
This is the filter list i use :
- [Energized Unified](https://energized.pro/)
- [Energized Regional](https://energized.pro/)
- [Energized Xtreme](https://energized.pro/)
- [iOSAdblockList](https://raw.githubusercontent.com/BlackJack8/iOSAdblockList/master/Hosts.txt)
- [Aelisya's Protection](https://raw.githubusercontent.com/michaelb-ae/AdGuard-Home-Filters/main/AdGuard-Home/Aelisya's-Protect-Basic.abp) (From this repo)
- [No Qanon](https://raw.githubusercontent.com/rimu/no-qanon/master/adblock.txt)

## What's the source of full version ?
My own modification and you add Energized with a deduplification and you have it (more info in "source")

## Whats intelligent tracking rules ?
it's rules with well known id in it for exemple ads.domain.tld will let this rules ||ads.*^ it will block all of them in one rules, and our python script will remove all rules who start by ||ads. less rules for more protection.\
"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." — Antoine de Saint-Exupery

## Efficacity ?
Between 8% and 12% rules removed with them on the first version of the script.
With some update the second version removed 18% of duplicate and i think there are many duplicate left to be found by a better version of my script.

## What will you do for those ?
I will work on a version who will check (before writing), if in the list he see a domain + tld more than 5 time (at start), and if so generate a list of domain "to verify".
The deduplication process will be modified in another version later to take them in account and reduce even more without breaking legitimate function of these website.

## And the whitelist file ?
Basic One on the repo.

## Ok and the upstream DNS ?
For that i use Cloudflare Team (free).

## And the policies ?
Security Threats :\
-> Anonymizer\
-> Command and Control & Botnet\
-> DGA Domains\
-> DNS Tunneling\
-> New Domains\
-> Newly Seen Domains\
-> Unreachable

Content Categories :\
-> Child Abuse

## And for the protocol ?
I use Dns over TLS because encryption is at a lower layer than Dns over HTTPS (and don't let the possibility to many treat that DoH expose us).\
tls://YOURID.cloudflare-gateway.com

## For the DNS priming servers ?
For that i use the ip cloudflare team show too.

## Why cloudflare team ?
Because it protect from DGA Domains and News domains, and this two type of domain hosts most of the bad guy, it block Child Abuse and don't have query limit (like NEXTDNS).

## Why don't you use cloudflare team for all ?
Because it don't block ADS and i use it only for blocking what i have told before.\
It let me control if my list are enough too, because today i have 0 blocked request on the cloudflare for team dashboard, if it come to show a domain blocked, i will report the domain to all project i use to add it to the list i use.

## You enable parental control but i want to show adult website !
I will recommand you to allow list them, since many adult website are infected with malware and viruses.

## Source
- [DMN - NEXTDNS](https://github.com/nextdns/metadata/)
- [DMN - BlockListProject](https://blocklistproject.github.io)
- [DMN - Olbat Ut1-blacklists](https://github.com/olbat/ut1-blacklists)
- [DMN - Craiu Mobile Tracker](https://github.com/craiu/mobiletrackers)
- My own modification

All rules are uncommented and unwhitelisted, so they will generate false positive.