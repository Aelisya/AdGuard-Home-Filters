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
For that i use DNSCRYPT :

    sdns://AQcAAAAAAAAAFlsyMDAxOmJjODoxODIwOjUwZDo6MV0g6Q3ZfapcbHgiHKLF7QFoli0Ty1Vsz3RXs1RUbxUrwZAcMi5kbnNjcnlwdC1jZXJ0LnNjYWxld2F5LWFtcw
    sdns://AQcAAAAAAAAAFlsyMDAxOmJjODoxODI0OjczODo6MV0gAyfzz5J-mV9G-yOB4Hwcdk7yX12EQs5Iva7kV3oGtlEgMi5kbnNjcnlwdC1jZXJ0LmFjc2Fjc2FyLWFtcy5jb20
    sdns://AQcAAAAAAAAADTUxLjE1LjEyMi4yNTAg6Q3ZfapcbHgiHKLF7QFoli0Ty1Vsz3RXs1RUbxUrwZAcMi5kbnNjcnlwdC1jZXJ0LnNjYWxld2F5LWFtcw

## And for the protocol ?
I use DNSCRYPT.

## EDNS ?
Yes i have enabled it since they support ECS (who don't send all the ip only the start).

## For the DNS priming servers ?
i don't really need it (since DNSCRYPT have in it's stamps the ip of the server but i config the localhost)
Localhost : 
    ::1
    127.0.0.1

## And for the connection between the client and AdGuard ?
I use Dns Over Https because iPhone/Mac Os Bigsur have DOH support and Windows 10 Will have it too soon, and since i control the server (physically and software) i don't have to worry about cookies and history log or dns spoofing.

## Why is there adult website on allow list ?
It's often a mistake in my script who have missed to remove it (for instance XXX.com is locked but a new domain XXX.lol go through), after a report i add it and remove them from the list, you can report to website@bacq.pro

## And if i think there is a security concern with a witelisted website ?
Send a mail to security@bacq.pro

## Source
- [DMN - NEXTDNS](https://github.com/nextdns/metadata/)
- My own modification.
