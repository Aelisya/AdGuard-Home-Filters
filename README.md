![OSSAR](https://github.com/macqael/AdGuard-Home-Filters/workflows/OSSAR/badge.svg)
# AdGuard-Home-Filters
Many list with ABP Syntax for AdGuard Home DNS blocking.

## AND what list do you use ?
This is the filter list i use :
- [OISD](https://abp.oisd.nl/)
- [Macqael Blocklist](https://raw.githubusercontent.com/macqael/AdGuard-Home-Filters/main/AdGuard-Home/Aelisya's-Protect-Basic.abp) (From this repo)
- [Spam404](https://raw.githubusercontent.com/Spam404/lists/master/main-blacklist.txt)
- [NoCoin Filter List](https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/hosts.txt)
- [BarbBlock](https://paulgb.github.io/BarbBlock/blacklists/hosts-file.txt)
- [WindowsSpyBlocker - Hosts spy rules](https://raw.githubusercontent.com/crazy-max/WindowsSpyBlocker/master/data/hosts/spy.txt)

## Ok and the upstream DNS ?
For that i use DNSCRYPT (QUAD9 w ECS) :

    sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0
    sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0
    sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA
    sdns://AQMAAAAAAAAAEzE0OS4xMTIuMTEyLjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA

## And for the protocol ?
I use DNSCRYPT for the best privacy/security.

## EDNS ?
Yes.

## For the DNS priming servers ?
I use quad9 w ECS even if priming server aren't useful with DNSCRYPT.

Localhost :

    2620:fe::11
    149.112.112.11

## And for the connection between the client and AdGuard ?
I use Dns Over Https because iPhone/Mac Os Bigsur have DOH support and Windows 10 Will have it too soon, and since i control the server (physically and software) i don't have to worry about cookies and history log or dns spoofing.

## Why generate a adult whitelist ?
I have decided since my last post who had generated a list of adult website safe who musn't be added in whitelist.
So i will generate a whitelist to allow these "safe" website.
Like that you can block on AdGuard Home all adult website (to block the bad one), and only allow safe one (one who follow the law of Européan union or similar one).

## Why a separate list ?
Because i think user/admin must have control over their network so all allow list must be optional only.

## Why don't i see these list ?
Because adult list aren't my priority and will appear when started.

## And if i think there is a security concern with a witelisted website ?
Send a mail to security@bacq.pro

## Source
- [DMN - NEXTDNS](https://github.com/nextdns/metadata/)
- My own modification founded in internet.