![OSSAR](https://github.com/michaelb-ae/AdGuard-Home-Filters/workflows/OSSAR/badge.svg)![CodeQL](https://github.com/michaelb-ae/AdGuard-Home-Filters/workflows/CodeQL/badge.svg)
# AdGuard-Home-Filters
Many list with ABP Syntax for AdGuard Home DNS blocking.

## AdGuard Home API
I have enabled Parental Control and SafeBrowsing.

## AND what list do you use ?
This is the filter list i use :
- [Aelisya's Protection](https://raw.githubusercontent.com/michaelb-ae/AdGuard-Home-Filters/main/AdGuard-Home/Aelisya's-Protect-Basic.abp) (From this repo)
- [No Qanon](https://raw.githubusercontent.com/rimu/no-qanon/master/adblock.txt)
- [OISD](https://abp.oisd.nl/)

## And the whitelist file ?
Basic One on the repo or microsoft plus (unlock all microsoft domain).

## Ok and the upstream DNS ?
For that i use AdGuard Unfiltered.

## And for the protocol ?
I use Dns over Quic because encryption is at a lower layer than Dns over HTTPS (and don't let the possibility to many treat that DoH expose us).\
quic://dns-unfiltered.adguard.com

## For the DNS priming servers ?
AdGuard unfiltered IPV6 : 2a10:50c0::1:ff

## You enable parental control but i want to show adult website !
I will recommand you to allow list them, since many adult website are infected with malware and viruses.

## Source
- [DMN - NEXTDNS](https://github.com/nextdns/metadata/)
- My own modification

All rules are uncommented and unwhitelisted, so they will generate false positive.