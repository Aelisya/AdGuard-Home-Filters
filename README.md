![OSSAR](https://github.com/macqael/AdGuard-Home-Filters/workflows/OSSAR/badge.svg)
# AdGuard-Home-Filters
Many list with ABP Syntax for AdGuard Home DNS blocking.

## AND what list do you use ?
This is the filter list i use :
- [Aelisya's Protection](https://raw.githubusercontent.com/macqael/AdGuard-Home-Filters/main/AdGuard-Home/Aelisya's-Protect-Basic.abp) (From this repo)
- [OISD](https://abp.oisd.nl/)

## And the whitelist file ?
Basic One on the repo or microsoft plus (unlock all microsoft domain).

## Ok and the upstream DNS ?
For that i use Quad9.

## And for the protocol ?
I use DNSCRYPT because he do like DNSSEC on all request and the server i use is in the same datacenter that my own server so y have a very low lattency resolution

## For the DNS priming servers ?
i don't really need it (since DNSCRYPT have in it's stamps the ip of the server but i let quad9)
Quad9 : 9.9.9.9

## Source
- [DMN - NEXTDNS](https://github.com/nextdns/metadata/)
- My own modification.
