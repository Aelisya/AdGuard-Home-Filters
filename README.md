![OSSAR](https://github.com/michaelb-ae/AdGuard-Home-Filters/workflows/OSSAR/badge.svg)![CodeQL](https://github.com/michaelb-ae/AdGuard-Home-Filters/workflows/CodeQL/badge.svg)
# AdGuard-Home-Filters
Many list with ABP Syntax for AdGuard Home DNS blocking.

## So you use AdGuard Home but what list must i use ?
This is the filter list i use
- [ABP - Energized Unified](https://block.energized.pro/unified/formats/filter)
- [ABP - Energized Regional](https://block.energized.pro/extensions/regional/formats/filter)
- [ABP - Energized Xtreme](https://block.energized.pro/extensions/xtreme/formats/filter)
- [ABP - Aelisya's Protect](https://github.com/michaelb-ae/AdGuard-Home-Filters/raw/main/AdGuard-Home/Aelisya's-Protect.abp) (from this repo)
- [ABP - No Qanon](https://raw.githubusercontent.com/rimu/no-qanon/master/adblock.txt)

## And the whitelist file ?
It's the whitelist i have generated for my network and the one of my parents, so for that you can inspire you from it but i will tell you to generate yourself your whitelist, but the list here generate many false positive so you must check if something break but when your have your whitelist you are protected from many treat.

## Ok and the upstream DNS ?
For that i use Cloudflare Team (free).

## And the policies ?
Security Threats :\
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
For that i use the ip cloudflare team show too.\

## Why cloudflare team ?
Because it protect from DGA Domains and News domains, and this two type of domain hosts most of the bad guy, it block Child Abuse and don't have query limit (like NEXTDNS).

## Why don't you use cloudflare team for all ?
Because it don't block ADS and i use it only for blocking what i have told before.\
It let me control if my list are enough too, because today i have 0 blocked request on the cloudflare for team dashboard, if it come to show a domain blocked, i will report the domain to all project i use to add it to the list i use.
