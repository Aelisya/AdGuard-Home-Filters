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
For that i use these DNSCRYPT (fastest in my network (two ipv6 and one of the first two in ipv4 (fallback))) :

    sdns://AQcAAAAAAAAAFlsyMDAxOmJjODoxODIwOjUwZDo6MV0g6Q3ZfapcbHgiHKLF7QFoli0Ty1Vsz3RXs1RUbxUrwZAcMi5kbnNjcnlwdC1jZXJ0LnNjYWxld2F5LWFtcw
    sdns://AQcAAAAAAAAAFlsyMDAxOmJjODoxODI0OjczODo6MV0gAyfzz5J-mV9G-yOB4Hwcdk7yX12EQs5Iva7kV3oGtlEgMi5kbnNjcnlwdC1jZXJ0LmFjc2Fjc2FyLWFtcy5jb20
    sdns://AQcAAAAAAAAADTUxLjE1LjEyMi4yNTAg6Q3ZfapcbHgiHKLF7QFoli0Ty1Vsz3RXs1RUbxUrwZAcMi5kbnNjcnlwdC1jZXJ0LnNjYWxld2F5LWFtcw

## And for the protocol ?
I use DNSCRYPT because he protect more than DoH DoT or DoQ.

## For the DNS priming servers ?
i don't really need it (since DNSCRYPT have in it's stamps the ip of the server but i config the localhost)
Quad9 : 127.0.0.1

## And for the connection between the client and AdGuard ?
I use Dns Over Https because iPhone have DOH support and Windows 10 Will have it too soon, and since i control the server (physically and software) i don't have to worry about cookies and history log or dns spoofing.

## Source
- [DMN - NEXTDNS](https://github.com/nextdns/metadata/)
- My own modification.
