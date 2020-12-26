# AdGuard-Home-Filters
Many list with ABP Syntax for AdGuard Home DNS blocking.

## So you use AdGuard Home but what list must i use ?
This is the filter list i use
- [ABP - Energized Basic](https://block.energized.pro/basic/formats/filter)
- [ABP - Energized Regional](https://block.energized.pro/extensions/regional/formats/filter)
- [ABP - Energized Social](https://block.energized.pro/extensions/social/formats/filter)
- [ABP - 1Hosts Lite](https://badmojr.github.io/1Hosts/Lite/adblock.txt)
- [ABP - OISD](https://abp.oisd.nl/)
- Aelisya's Personal Protection from this repo
- Aelisya's NSA BlockList from this repo
- Aelisya's Bypass Protection from this repo
- Aelisya's No Conspi or Fasho from this repo
- Aelisya's No Google Light from this repo

## And the whitelist file ?
It's the whitelist i have generated for my network and the one of my parents, so for that you can inspire you from it but i will tell you to generate yourself your whitelist, but the list here don't generate too much false positive (many CNAME block from ADH).

## Ok and the upstream DNS ?
For that i use quad9 who is the most Secure dns (in malware filtering), i tell that without any sources, check yourself.

## And for the protocol ?
I use Dns over TLS because encryption is at a lower layer than Dns over HTTPS (and don't let the possibility to many treat that DoH expose us), if quad9 let us use Dns over Quic i will go to it.
