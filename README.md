![OSSAR](https://github.com/macqael/AdGuard-Home-Filters/workflows/OSSAR/badge.svg)![CodeQL](https://github.com/macqael/AdGuard-Home-Filters/workflows/CodeQL/badge.svg)
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
I use Dns over Tls because encryption is at a lower layer than Dns over HTTPS (and don't let the possibility to many treat that DoH expose us).\
tls://dns.quad9.net

## For the DNS priming servers ?
Quad9 : 9.9.9.9

## Source
- [DMN - NEXTDNS](https://github.com/nextdns/metadata/)
- My own modification.