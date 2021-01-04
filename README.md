![OSSAR](https://github.com/michaelb-ae/AdGuard-Home-Filters/workflows/OSSAR/badge.svg)![CodeQL](https://github.com/michaelb-ae/AdGuard-Home-Filters/workflows/CodeQL/badge.svg)
# AdGuard-Home-Filters
Many list with ABP Syntax for AdGuard Home DNS blocking.

## So you use AdGuard Home but what list must i use ?
This is the filter list i use
- [ABP - Energized Unified](https://block.energized.pro/unified/formats/filter)
- [ABP - Energized Regional](https://block.energized.pro/extensions/regional/formats/filter)
- [ABP - Energized Xtreme](https://block.energized.pro/extensions/xtreme/formats/filter)
- [Aelisya's Personal from this repo](https://github.com/michaelb-ae/AdGuard-Home-Filters/raw/main/AdGuard-Home/Aelisya's-Protect.abp)

## And the whitelist file ?
It's the whitelist i have generated for my network and the one of my parents, so for that you can inspire you from it but i will tell you to generate yourself your whitelist, but the list here generate many false positive so you must check if something break but when your have your whitelist you are protected from many treat.

## Ok and the upstream DNS ?
For that i use AdGuard Unfiltered Dns.

## And for the protocol ?
I use Dns over Quic because encryption is at a lower layer than Dns over HTTPS (and don't let the possibility to many treat that DoH expose us), and Quic is newer and take in account many problem than tcp can't have imagined it will have back in a day.\
quic://dns-unfiltered.adguard.com

## For the DNS priming servers ?
For that i use AdGuard normal (secure) servers on ipv6 only (ipv4 must be in the past and ipv6 used as most a possible(don't do that in professional network on professional add an ipv4 fallback)).\
2a10:50c0::ad1:ff\
2a10:50c0::ad2:ff

## Why using AdGuard DNS on Home ?
I don't have problem with their DNS but i prefer an unfiltred upstream and add filter myself like that I and only I decide what is good and wat is not.\
For the priming server i use the adblocker one, because my configuration router to connect itself to my isp (on the router) use clear dns so i use them too because using home in this case will cause a loop error if the network shut down (electricity problem for instance).
