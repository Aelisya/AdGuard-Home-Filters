# AdGuard-Home-Filters
Many list with ABP Syntax for AdGuard Home DNS blocking.

## So you use AdGuard Home but what list must i use ?
This is the filter list i use
- [ABP - Energized Unified](https://block.energized.pro/unified/formats/filter)
- [ABP - Energized Regional](https://block.energized.pro/extensions/regional/formats/filter)
- [ABP - Energized Social](https://block.energized.pro/extensions/social/formats/filter)
- [ABP - Energized Xtreme](https://block.energized.pro/extensions/xtreme/formats/filter)
- Aelisya's NSA BlockList from this repo
- Aelisya's No Conspi or Fasho from this repo
- Aelisya's Personal from this repo

## And the whitelist file ?
It's the whitelist i have generated for my network and the one of my parents, so for that you can inspire you from it but i will tell you to generate yourself your whitelist, but the list here generate many false positive so you must check if something break but when your have your whitelist you are protected from many treat.

## Ok and the upstream DNS ?
For that i use quad9 who is the most Secure dns (in malware filtering), i tell that without any sources, check yourself.

## And for the protocol ?
I use Dns over TLS because encryption is at a lower layer than Dns over HTTPS (and don't let the possibility to many treat that DoH expose us), if quad9 let us use Dns over Quic i will go to it.
