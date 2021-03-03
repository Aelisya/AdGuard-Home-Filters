![OSSAR](https://github.com/macqael/AdGuard-Home-Filters/workflows/OSSAR/badge.svg)
# AdGuard-Home-Filters
Many list with ABP Syntax for AdGuard Home DNS blocking.

## AND what list do you use ?
This is the filter list i use :
- [Aelisya's Protection](https://raw.githubusercontent.com/macqael/AdGuard-Home-Filters/main/AdGuard-Home/Aelisya's-Protect-Basic.abp) (From this repo)
- [Online Malicious URL Blocklist](https://curben.gitlab.io/malware-filter/urlhaus-filter-agh-online.txt)
- [The Big List of Hacked Malware Web Sites](https://raw.githubusercontent.com/mitchellkrogza/The-Big-List-of-Hacked-Malware-Web-Sites/master/hosts)
- [OISD](https://abp.oisd.nl/)

## Ok and the upstream DNS ?
For that i use DNSCRYPT (QUAD9 w ECS) :

    sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA
    sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0

## And for the protocol ?
I use DNSCRYPT for the best privacy/security.

## EDNS ?
Yes i have enabled it since they support ECS (who don't send all the ip only the start).

## For the DNS priming servers ?
I use Quad9 the most secure DNS, with ECS enabled on priming too even if they are not useful with DNSCRYPT.

Localhost :

    2620:fe::11
    9.9.9.11

## And for the connection between the client and AdGuard ?
I use Dns Over Https because iPhone/Mac Os Bigsur have DOH support and Windows 10 Will have it too soon, and since i control the server (physically and software) i don't have to worry about cookies and history log or dns spoofing.

## Why generate a adult whitelist ?
I have decided since my last post who had generated a list of adult website safe who musn't be added in whitelist.
So i will generate a whitelist to allow these "safe" website.
Like that you can block on AdGuard Home all adult website (to block the bad one), and only allow safe one (one who follow the law of Européan union or similar one).

## Why a separate list ?
Because i think user/admin must have control over their network so all allow list must be optional only.

## And if i think there is a security concern with a witelisted website ?
Send a mail to security@bacq.pro

## Source
- [DMN - NEXTDNS](https://github.com/nextdns/metadata/)
- My own modification.