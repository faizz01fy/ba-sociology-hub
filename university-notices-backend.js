// university-notices-backend.js - Live Auto-fetcher & Caching API for Calicut University Notices (CDOE, Regular & Media News)

const CACHE_TTL_SECONDS = 3600; // Cache for 1 hour

// Minimum guaranteed fallback media news if network/RSS feed is slow or unreachable
const FALLBACK_MEDIA_NEWS = [
  {
    "id": "media-1",
    "title": "Calicut University boards row puts Kerala's UDF govt under fire over 'Sangh links'",
    "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxORjMzUlZSdWZibnBIcjJKMnMwdGUxcG1pdjdkc2FkVGs2VjR0LVJCX3RXWmp6NUxMY0plbkhJUmFEX0JVZ1h3X0NiMU9Sd00tR1lYTVozd2U1RjFJWXVPeFhNOVp3cmg4QzI4QnJXbmJnMnNmd2xLdVh1bzZpNGdYeEJpMVpLTkhMbEkwUGxSM3pHMFFkZDRPQzgwU0dzbjE4am9DMmRIa3p1VDB2U1ZHV1lDZnBZU1k3?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "Media News",
    "date": "20 Oct 2026",
    "is_new": true,
    "source": "The Federal"
  },
  {
    "id": "media-2",
    "title": "Two-day college union polls in University of Calicut this year",
    "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPQ0ZraDZRNEJVcXlFY045RjY5amN4SlgwOHZ2N094ZWlXYjluRUwxU0RkOVlwakNJMF9VUVJvb0dfU0g4NXRxRjMtSGJZVUd4MG9JRlJHU3RnbzNKMF9nTmJTLTBrOEprclJVNnVPRzBQWWRET0xXaWdoMUJnX2dMT2F3VjUxcllEbDdBa3RnTUVGeGFVUXprMWlTWkR0THdtaDJ0NklCbjY5ZzhuWTlXNFRQSjVrajlicGlucXkxMUJQVWNTS2Uw0gHOAUFVX3lxTE8xUWhZT3c0NDJTRjJVZUhSWHRUUmN2cDhLVmRZYmxLUExYWnNJVVg4M2c0R1U4T2g3d0ZzMUVhOExDMnkydWxpQXM5bjRxZVA3dzFkMjNfdTFKa1Z3SVRlUVdzcjI4SloxYXFoalNpSGJ3dm95czFZc2x2TGw1U085bk9IQXlBRm9DR0cwejBSMktWNEJCdlhTS1J4SHliaXZ0RUhWc18ySTVCaXpuWG5MUXNJX1ljVzlfNm5LMFlKWkZOX0swWkI5SjFPS0Fn?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "Union & Campus",
    "date": "12 Sep 2026",
    "is_new": true,
    "source": "The Hindu"
  },
  {
    "id": "media-3",
    "title": "Keralam: Full Vande Mataram rendered at KCU and Calicut University despite protests from Left-Jihadi groups",
    "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxQMl9IdThCdlkzQ0dVMkZrcFJzNExUNkVoRG1vMExiVTR1TVNEYTROX0FuMlQ0djNEQW5Sc3Ytb0F1YU9BVTRZdExsLXFiU0tNWkZfRFRmVW81dTNvRFVieTYwUnVwa3NxcGtEazZNek8wMlFOU2J5LWJwb2FCWGE3djZXMkk0dDlmcmR3bHBaRXFXV0Z5aXdOMzl0N01oV0tQaVNIODd2UHo4aDU2MGZHS19NT3J3QUc4RXhLMENqRUNUWC1wUldmYVRuSGVZdFRNQmQtLWpBMEtYekwtU1BNR1BYOFEwcnRiWWfSAe8BQVVfeXFMTlFGNzE4elcySkRvVWphaWFVbC1XbTA3ZnFpdjJrM19YN0dBd0kxUXVYUVl1dzlKN2JhV1lKY0VuYWFVWTlldjZ0NU5PNVVfRDV5UG5NQ2hEYUJyZ1RZN0NpU29tei1zVm1HNUxsZy02dWZTN1JBQVVuY3YxX0VVSV9sS1VsZHc1UTlZS3Q5eWhSVFVNRE12cG51Z2o1ejQ5b3loNWx2bDdfSERDeHUwS29WNFAtb25iMm01aERDcGdLRTNNSEpuWlJETHJxSkU4QlNhZEtpbHJwZFEydHNycVdCaERRZ2RtTGhoNmtpQ28?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "Media News",
    "date": "07 Oct 2026",
    "is_new": true,
    "source": "Organiser"
  },
  {
    "id": "media-4",
    "title": "Calicut University first allotment 2026 on June 29; classes begin July 1",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQY2RyMVMwb09uTllFT1RGX09Ra0ZqbjNmYk0xQXRsSDZMS0FGdmQ3MV8tM2s0cFdHaE1EX25Db3BmbmtBcjF2a014M041S1hzLWw3a2lacHVIb3dQa1dmcWFvV0FTRWRNbElnajVCT1NVUVllcVBUM1JsN3pIeTBKX0VvU29uS29iS1p0eTM0WjFmNGtWcmw5RkdCREktZkVIeERyNGstQm5ULVdMaTY4OFp3cm5JQdIBuwFBVV95cUxOSXR5Wlo1bktmNk5FX3l0UUY1STkwU1NMUEt2V0pXTUZUM0NYUDBsX3ZlU3RrSmZnVHFkRkNpdU9fVWFUSDJ5ZXA5ZkJiUUFDOW5GYndPUUN2V3hsSTZ3UExwdTRyWjlzLVlEbm1fWGRGektWaU5jcktYTEU3cVhZQ2NFMU1IYmR2U1lYY0pqUmtybkxGb2hoVlFXblBQRGdmS0M2bGNnOXZ0YmFDOE12NXBhS0xULXNMeEVN?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "Admissions",
    "date": "22 Jun 2026",
    "is_new": true,
    "source": "Careers360"
  },
  {
    "id": "media-5",
    "title": "Calicut University Expels SFI Leader Over Protest Against Blocking Magazine Release",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOTWxfUDFvZUYzVXVPeVpLWEhIUGgxcGpvVUFPSWVtLVNHSTQ5NHJmTm0ybld2SkdfSHEyQTJsSUpIeWFHQ2dkMzBmYjZxNk9uRjFYT0QyaGxDS0Z5WVo5R2xGTTRDb2NqUVlQZ1M5dEZxUW1VN0JNUFVvT2gtN3luQVBsWi0wdm91NXFzTURqdkZiTTFxRFNoTk91ck5uLTNhV0x4VThOMGpDZjYwV0g5c2ZVbWlubl9TNHdfYkFvUmltRHFlQ3pSVWdDV0N6Qjg?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "Media News",
    "date": "19 Aug 2026",
    "is_new": true,
    "source": "Deshabhimani"
  },
  {
    "id": "media-6",
    "title": "Telescope stolen from Calicut University observatory recovered by police",
    "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxOUDlPMkFGUXFQUWN0dmF0V0tPUWJBbUd1b1FROXRQMGxCUEtlMGlHclIzZWdkRC1yOHFvX0s2cGJnakU4em9saFRDXzR1YlFLMS1oQ2k0MWdVbGR3TG9nY2hJcmVYUnpyMk9za01pUVduMnNSclJLUVd3VTVncDFqeDl3TGtodmVZcGxzM1lKNHBuVlkzQmpjX1pQbUZhX0hWbDlwN2FDYXlFRmVSWHNyOG9ZS1pyOXBSNmZRQUNrWHhvbm9DWVZsaEhyeC0wQk5rOVJ4d2dTV3hQaEllNm84T3E3SdIB6AFBVV95cUxQbmhjS3lwalZnT2JzZ0QxR1V0Qy1yQ3VuY2QxUjF3T0c2eDI3cXVtNHgyV1ZhQUlXaGJGMm1qZDE2WWctSWNZM0h3eEFWbHZSc0w2SDVvWEtCU1lVbVdqQkQ0THotSVRkd2pkUFYtdXZIZXpFZ1EzbmtUM3l6NFVheU14Tk5penpONGFMT0NGZkExTVBlZ05FalJDQi13aExuT1M3LXF4WFR5d1pKLWhVeHVEd2tTMlg2NldQdjJPX0JER0l4bkFKRzIwb2ZhRHNkTWFUMmp3MXdxdGtVeXNEYlBkMFNSLWpQ?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "Campus & Research",
    "date": "07 Sep 2026",
    "is_new": true,
    "source": "The Times of India"
  },
  {
    "id": "media-7",
    "title": "UDF members to head Syndicate panels in Calicut University",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQSllRV21VZXYzOGlQRUUwNE5NeE9BazZ6aEZaczgzRHQtc2NyRjVkLTloTF9aeThDOUFSQ2pZcUs3ZkJFblZSMGJDOVNaNVQ1dE5yT0p5TVBzZFY4dUFLbmdUTnl5d3dCcmNpdVBGS0J3c25DNDZrMF84WVpFbXhwdjhlT2hDa1ZoeFRHTTc3c2VLRmQwel9qNmoyajViQ1RWMmlYWUpuU0NzT2VFVm5uVVZsdGNSamdTVDl4MlRwVGlrUdIByAFBVV95cUxORVl6cmo5S3VNLUNVUkFOQlJQMW5BTjdyeUZNOHAzUUxNNkl4c041dGlVM1VHWVdnVlVWdlk5Q1JUblBYdWxDbDZteXNJX2UwcExqUDRHVkNtXzBrZHc3bVp5bk9kdWtnSGJER3JTT1RZSEVHRVQ5bngwaEg3M1p6Y1RDbUJEdnVyMXhSOEZWMl9Zdlptc000UmR6VnBhV25wWmxfOUJmRHctdHFkVFF5aTAtTlNoVWlVcV9IaFBNRUo2QjNUUnlJdA?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "University Board",
    "date": "10 Jul 2026",
    "is_new": true,
    "source": "The Hindu"
  },
  {
    "id": "media-8",
    "title": "Calicut University Online Admission 2026 (Open): Fees, Eligibility, Registration Link & Process",
    "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPamI0VWphZF93S0xDWllNbi1YMjVqX3BoLTNnYTBWQ28xMl9INVlBTjlLSnNxR2l0NUdtNVRCVnNKckR4TWl0TU5SNEhGdnp3dGtsLW54aVpFV0dNcl9Cb0FVZ0VaRGRUeGQteHRZSENDZWhJMjQ0UndVTWY0ajlhdTl4SE5UckU?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "Admissions",
    "date": "08 Jul 2026",
    "is_new": true,
    "source": "Careers360"
  },
  {
    "id": "media-9",
    "title": "Calicut University to confer honorary doctorates on October 6",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNSmFNcFZfMk1KQzdkZ1RQTWh1dFRLNkFYSmQyd0FQaUhwbnBzM2hDMkZjSXRrUURtZXpXOGpRNXFoT0Z6a1daVUxLalRqVjdYZWJQZmFhLVJpaHR2Z25QVzE1eHo4dWhTR0NueU14M3JlaGJfV2o4SVlRWEk3S0dfMzEyZFRHQTh0c2NrT2wyNmsxUXY3TThLZTNKeFhrNTFCQXloVkREWFlqYkp0MzZaYlhrUmw3MHMxTTZ1LV95Y3RBU2czZGfSAcwBQVVfeXFMTzQybHkzczVUWXc2Vk1jNXZnSnljOUZSaFRiRG9JZXVVSl94anVTY25KS2tLOFV0T2ZQRXI1QmpocmJBV2s2WTJ1Wi1XVWJaTWpsU2VidXNLR2RJMGp5RTEyNzdwY1FlQWJEZXhEMk5SRUNnUlhaM1NFOHhvRWJyVjRGVG1mb1FDMko0aXZsdWJOd3BLdWF3bTQ3ZFB4T2hfVFNWekVDTlBxVUVZNFlYdmtOVWczLW5DbEwycXg2YUJWTWVjQnJ1ZF9pTUdm?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "Honor & Awards",
    "date": "25 Sep 2026",
    "is_new": true,
    "source": "The Hindu"
  },
  {
    "id": "media-10",
    "title": "Honorary degrees in Calicut University: pro-Left senate members raise lapses, authorities deny charge",
    "url": "https://news.google.com/rss/articles/CBMi-AFBVV95cUxPbXpoUlhSNGhEV1lNdlg0ZnZJcFZMdlFWX0JkeDNvZ2Q2VU95eGNDS0EwcjdpUGhtWi1VbVNaYlF4b3oyTDQzRlNZWUp5ME1LY1Blai1YRDZyNWhITDNHZS05emttX1ZOc2xqOGE3X3psZ0tyRGdnNXYwTU5aWk5oNnZfdG9mTkkxZnotdzd3VngtY0hkeHJkQ252UnM4aG1HWnFqdGx2RFpoWTZuVENFZE1ROU5zVUgyRXJwdkM0cWdLVm1taGg1TDZwckdfNXZhdUZOV2pwXzdJb3lDcWVDVWc2Y0RuN0VJM2pKTlM3dV90eF9BWVVKd9IB_wFBVV95cUxQSkNmaWpCMGF5WFZRSl9tRTItTThQdzdoejBzbTBlMHFPRkVtRXJFN3VqbXc0VUtYQXRGWFp4Wi15eVlNT0NSalkyX3FuX1IzOXphM0IxY0draGlXQzlPOE5IdmJuQXdqUVUtV3Zpa2xMdnhwb2VxUjMwTzNXcV95TldzX3hZUGlSTko5d2pfZFo4SGp0TmtMeVl4UG9sNW40TVRsT0k4NmZBWTlZc0FNaWJvYVY0c2RHbjc1cmQ2R0dKWkZsb19rbG5ydHFGLWs3RXhyaHNuV3VOVlBzVm41Q0lWSmdRYU5KeFFLMVZXNHBfMnAxSHlhZkQ2RHk3eXM?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "University Board",
    "date": "21 Sep 2026",
    "is_new": true,
    "source": "The Hindu"
  },
  {
    "id": "media-11",
    "title": "Calicut University to have panel on FYUGP facilitation",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNeVVYekR6bUZlWWVoVkVkTFNueTdEZHI5V1YwZlZHTEt1eldNcXAyeEczYndLME1sdHVhcUJ2cHhKR3dxVGFGb2hRLVJqT2NmZzZURHBhTGZlRDJqUllkaXN1dzJaYkM4MEh2djJ6aFY3UlZNemZHR0M4SGhkWU54MGJqVktrcFhoWEFtazNTOG1LTjRNX2VmUW52VXU1bXNmWTJtZXhkcGtKZS1VUWVlS3FLWl91UFExUmpWUdIBwwFBVV95cUxPY1lZNXF3dURoU3R5TzhFTkZGY3dySTNzaXM0NjBrOVo2NV9qRWJPX2JpYnE5NUhXQWVIbE5TOVNXekpuNE5BTFVrV0g0NGVFQ183VUNOMmJISmtWWWhTVnNGYkhmdlBsMTVEQ05BNGg2WWllRG1MTGpWRTFLSzI5WWU1c1BvZnRUR2M0N2I4cjFObWsycmZ1NXdRU296Q09OTEd1ZF9aRmtKcU4tUzBjbk5zeTRnaTAzcllyMUtxQkdvV1U?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "Media News",
    "date": "06 Sep 2026",
    "is_new": true,
    "source": "The Hindu"
  },
  {
    "id": "media-12",
    "title": "Calicut University reconstitutes College Development Council, first meeting on September 11",
    "url": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxNWExlSmtzSVBkTmlnZFN5S2lLaUtIT05scnlwQ0FqZGw1a2Z1UE5aM096eDljUDZMOHpoUEpwckp5Vy12WHh3RlFRTnFSRGpoa1U3SjVpMHlYY3IxMWItZUE4SnZ0OVp3Z0lTbVVsQ1RMM3NBbG5YYUZOM0lNeDhpT3ZRQzM4NFRFOTR6dFBULWVGc3Z3YjNmVGQ3dVJVQ3ZMb05laFhXLVpmZWpkRTJiSWlPbEdYNHJzeV9VcHlZVmFYdDl5V0NyWDN6Q0xweG9hSTdiaXYtS1J5TkVDX0pINTlQZzdfLTNhcjdwTNIB8wFBVV95cUxON29fcnRsSkNzamFmUUpLUTBQRzdWUzNsOTFRbVFhNkx4bmdwVmN6NEVMNDdFV25ITUtEbUlLTEJMNFkxd09WNXphX0VDSWhlc2V0OVR5NjhtVHhHcC1sVjlsWlZsRUtTNDVJb1JjamhzamdMTjlBNzFQV0FxaDJ6VXlQNVRGX3YxWGZVa3BJNGhzSTNPWXVDWGJvT3JRNk5vb1pCSFZXZVV1MkxtN2dTMV92endwaEdFSU4xOXE0a2tQNXFobG53NmxIemY1Tlp3SWZ0YmRFX01QcGxPLTR1VUdia29wSG1vWE9YUkxZeWFuWHM?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "Media News",
    "date": "09 Sep 2026",
    "is_new": true,
    "source": "The Hindu"
  },
  {
    "id": "media-13",
    "title": "Calicut University to launch new UG, PG courses to address changing job scenarios",
    "url": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxPV2lvR21aYlE0MzhYYl85czlOVE0yNlM1ZlRaanZEbV84dXJkVXNBTXMxTjVfa1FOZnlJSDE0cW9YOGFQTkVQWTNzdE5yQXdHeDVGejdMTDBJbjEteFdvSGEzeTVOZ2x6RmhhcElqM2w1ajQzc2c1VGVJOWNYTzJsSGtvZVFZaWdudDlHUDFTY0ZPUzVzOWZJQnBBS201U2p6TGJlOE54a3VZeWloTjhON05vN3BvY2ROVk15X2xyS0I3MUYyRjNUVW10QXZ3T3NBUmt5UG9SQlhDSjVfS0w40gHmAUFVX3lxTE5iUGVSMVd4eWhVWURSbFgxTGxaU2JISGJIa1NMQmktUVNET0ppam5GLVJtWlR1QVFXa3dvQTZST0FTYjVYMEJvdnhxcE5zeTE5QXR1T1YwMmJ2ZWdrZS0xdmtnR1NaOW4tdTJQZ0lzLUlCd1JOTWJSS0E4b3d3Qjg5MmxORVU3RXVJTm1Hd2txaUtjLVJPbmRUQmZHWU5ERE5ZYVJ4dTkwU1dLdGlRV09CTnlzNndTcWthd0I0S05HRVNYM3Jva01FMEV2UDFmemNzUk44Z2F0UjJQVm1tQWhwNHVsQUZ3?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "Media News",
    "date": "08 Sep 2026",
    "is_new": true,
    "source": "The Hindu"
  },
  {
    "id": "media-14",
    "title": "Pro Vice-Chancellor's appointment in Calicut University kicks up a row",
    "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNWjVYSXVkQ1JZSm5kYjY4YjNrUkNVOUkwMW9sRXVZQUtHQUVWbUZZbFpLbkFGQVhzVjQtUHdmUjhHS21xSFh1UV9ES202Z1p2emwzTm9FX3d3OEtUOXg1Y1ByLUI5aEtrRl9EYjkzdTZmWG9adzUxQUY2VXQwdjF2ZHcxQ3pQcUFrOFk4TUtfTlB3em0wNHB1RklCNW9HWllkWWdNUDJuRzZxamxVVXRuaExWc01scmM0dVgyaTdOSzBpak1tYXZIVngzR1N1WVpm0gHXAUFVX3lxTE41WWJUZXl1VlpWQ1FZd091X2NKamlCck9tMHY2bFVNMUFHWVFySFp1OUdNRlVlY3NucHNVVUIyMl9LTjBrQVd5QVZRNWpPSC1OcWhtNWY2N29CSGxmejBCT2lYVktrcFZpU3lnM3RHdWNpVFctWHl6UWNZLUF5c0RUeU1KRUtyaEhPQ2FELU8wandDWklaQ1JobDBEaVlmbEV3RkhGNFQzUFJoNVBTaHd1YTdXeGYzVmtKMTM1SDM0STIyVkQ4SjVkbWoybDhqb0VZUnVHN2ZR?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "University Board",
    "date": "14 Jul 2026",
    "is_new": true,
    "source": "The Hindu"
  },
  {
    "id": "media-15",
    "title": "Registrar given temporary charge of department students' union president in Keralam's Calicut University",
    "url": "https://news.google.com/rss/articles/CBMi_AFBVV95cUxPVXlaWmZWU2JKWHFLZVFWemlBSWQ2eW9oeTJWdE4yQ2YtQ2RpUlp2TVBVZTR6UFVZOFo4TWNqWkE5bjRoVFBPUmptc2lsWnJ4dUVkNmFfdURaNXdrMHNjcERfakhVeVJzS2ZRNWtMMERBUWFXSm5NaDVxczFSbzdqM3NRaWlNYjFrOWVRNHNFc1ptQmNCVFQyUFM5YWx5VlZXWmZJQ2VfSW1uaEZOMVlYeGstY1Y5ZVBwQnU0bmR1SHhnMUdjRF9sLU9tZEZzc3ZrSzlTcS03RlFTcGdkNmdMT2J3dTVsRWd5T0VNU2lKaXRyYllWVGE2UWktNDPSAYMCQVVfeXFMTncxaGdKaHJsYjRPeDlFV1hBaUNqZWh0TGFWYld2VWRuaWpUWWtlbDk0bWR0cERLWHhVaUVWV3AwOVdhM0FHb2xDVkVpeEVaMmtYNHhLcWlJRDAtUDNHVGVBRE1GTTl4cEgxTVNNVWJsT0c0eWJuOUlYMTJPalB2NVNrZVVfVGVnOGgzQ2E1WWRMemZEMFhhb3g4eXRMSHlheklIbGhfcS16NDcwMlR6elQwXzB3WkxQYnZRazFqNnlxMUM5Vk9XcEd1YWNNN3JjSDg0UkpoTTVuMkdPYjlRSlpudm9XYzVtX2lYbXlyaHlQRHZFWklrZlp4OWtzSlgyNVllQQ?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "Union & Campus",
    "date": "23 Aug 2026",
    "is_new": true,
    "source": "The Hindu"
  },
  {
    "id": "media-16",
    "title": "Calicut University says 'no' to proposal for research on astrology",
    "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPc3pCZjh0LTBBU0VQSXFYa0Y3U0ZLM2N3Z0N6QUM5NkhxNWkxVFkwUWxkQUp1YXNEcDhhbFJ1ZDFDZUZYNDNoMkJwZE1xbEt6TThBM1JpMjEtLTdfTkIwODVWOGxMN2NGbXpFSFA1QjdNU2JERElBX3VRU0tyLUo0d3FpUHNqRkViQVVFUmdaWDdJYW9TT2RzNV9nOXV3Q0hNdS1GbFdqSlREUlhKN0ZDaVAyRWE3Z3FqOW1jQVJHalVZdUZqLXdRT2ZR0gHQAUFVX3lxTE5xaThTRUw5WjRTOTAzUnk0bVg1U0Q2dVItaUxQRzIxckRKY0IyMk0zYTc0SUZCY0I5aUhYQjc2VF9KZzJWMXo5N2pwRWo0UktESnFyNjZrdXdkSVZDYWxuTkltS2JMaEJzZU5KTXNGd1QxaEttVi1mQU1TdWRRZFJGanNtcnJqLXB3ckh4UkFfVXpZYzBIU0cwTVBZYTctMWlNRVUwWnMzSlV2Y21fQ3R5QU41VDhzbnczUUxJYUJfOXlnZF9hb0dQNVFBWWFnRFQ?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "Campus & Research",
    "date": "24 Jun 2026",
    "is_new": true,
    "source": "The Hindu"
  },
  {
    "id": "media-17",
    "title": "Syndicate member seeks relaxation of punching system for Calicut University faculty",
    "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxNaTMtT0JvcW0tZ2NGRE5yaDhWZi0wNWlYLXJVbi0xZXVTUVp4SUN2Q1RIdTFLVktyVEJqWm1WVGhzQWR4ckJ5ZGI3YXJObmhRRGtSRW5TMV9EREZQalNaU1FpTEZna09GTnhWUG5iSmszcFJvX2VGaFhiTFlRVEkzWDhzdDlCMDNqMFlONlkyYjc3TGQ1bDNRTDlQZzBVZ1NhZnBfaEhrN2c5MlRyWTJvc1FRblZJcHFsMFZ1bU9BU2d1cVRQd0hJeU5JWlJwaFRDTHlpa2NuaEtPM0psWE9fSjlhRdIB6gFBVV95cUxQdFpMaU9DUmVsNm5wQ0RHcWhFclpWVHg4bVEtNFowOGoySEJISzNkRHgtb3ZLNlJpLWxETlhOU0F5NG54bXdwRERsSkxkNl95Z1Rra1NQVWNQbzU4NGVCcTFTZXhPRll6MEttM2Zya3lNSXNvLWQtT21fTmhRbjA2NlJMaEZJODNJZWxUaWJXNTBCSXV2TlYtbExvZlluMWRNOUxCOC1BcFpnbXE5SWxQWDBWUlo4RGVocnBMeFh0M1ZaN25VVkNJcEtWTFI5V1JraG11SmQtcWdfYTBiNGsxd1o2TDdYNDUxdGc?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "University Board",
    "date": "20 Aug 2026",
    "is_new": true,
    "source": "The Hindu"
  },
  {
    "id": "media-18",
    "title": "Calicut University launches placement and training centre",
    "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNRlpJUFlUZDhtcUs3VDJLYnhNX184TnZSRS1IYTc5RWxFTDNkUmM4MjlVUXFHYVQxTXZ0aXJnS1Jaa1I0QVJseGZfNW9OVEVIRWctc0EydnBHWXRzS1ZSZHplbjhGektpZk9XVmFhX0psQWhmWm9TaFJhLUJNblVMaG9zWGdXbGZvZmNFRXE4UFJ4am5DRTZLaTVPcjdpbkxHaHpva3lnSG1IcWhiSktRcWNuT0VPWVp1NVhoUjVzcznSAccBQVVfeXFMTTRxVkpiSjRmcjNsX0hKR2xOOVZLRVBKa0xIc2tELUlXSnl2Z3IzVmxITjhpQkpCZDNEM3FPYVo5WVZhak90dXJyWlVkRTNQci1mdFVnMmJVRzRONVU2WUZDalVCd1pwbmJCTTdvMkR4S0dvMHBLd1NfeWxOZy1vT3hQa08xUVFwTnlpLUpDR3N4NjNiZUU0eU5UVzZzaWJvQUVYUVhxNllqa0VPdll2SjVta1VJLTRmSGJuTVVKQ2F4QUlTbEY5bw?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "Media News",
    "date": "18 Apr 2026",
    "is_new": true,
    "source": "The Hindu"
  },
  {
    "id": "media-19",
    "title": "Calicut University plans special academic zone on main campus",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxORkZuRWxvNmlnOGhDSk9NWjNBMmpWdTJpTXNGQVU5SGxzejFDcElOazlPRHF2MHA1T1MyRHlacTRFeTg0TklBM0hfQXFKRHFKZzhsd0xReGdtdUFEc1kzMWEyU1VQclhiVUtxeGs1ejNybDZ4eU1pY3A0RlpDZUR4bjJ4aERLWGY1bDc4OUpZTUNuVzQ2eDh4aVhBdmpsa1loM1U1WWlkdC1ncklxWnRnSndmdExZUllGMy11ZHNPei1ETDNMOXfSAcwBQVVfeXFMT1l0dlRmV3RjSlo1N0RmYTdlcFJlR0hvajdXRHZJVmRvUTRDUXJnbll1VHFVU3d2Z2VNTW1ic2hsdnNlSXU4a0l6WmQ4bWVtM3ZaaEc5SmhLSTJwM2Vwc00ybkdiSmZTOTBOUjRRS2szbWtlNzNqMkJwSkZzbUZuY29UYlhkLWgwbUJNNE05enBvak1UQ3dMTTFQWmZydWVnWGpMbHdKSzNDdm5XVnVDMUFIeUhJYnA3TlJrYU9JZkZvVng5SFhSbDBaWHgx?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "Media News",
    "date": "16 Jul 2026",
    "is_new": true,
    "source": "The Hindu"
  },
  {
    "id": "media-20",
    "title": "Kerala's Calicut University plans 'ASCENT' to boost academic standards of affiliated colleges",
    "url": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxPUDNZZXNDakZOVkVKZXc3REg1clBIYUxpbGRUQ0swNHpjVUNFVlBnUXNDaVVCTFVvbnJXUXdHYTV4U0NuMUVXcjJmS3RWdzZ3d3g1WmJTakNoQjMzaHpPSEFDZmtDUFg4VVZmYzN6XzdvNEVrWk9jTUhhQnpLUWQ0dVRUNmRaQ2ZYc3ExMG5OZ2xKRWEtNWNoRDhVSmhLYmpVbGFESEhiTC00OU9pRERMRUprRGl0X0VCRXJhRXYyQ0J2dG02b1otZXFWX1dHcDlBNy1OS3ctMFhJRjdma3p6Q0FwQ3RGaGxWdEpxR9IB8wFBVV95cUxNNVV6Y1JYSzR3REV2elR5NWhILV9LcEJGNGpSUHJseXBlbHA0QWIzdW1ocHZSTFZDMXNwQmFnNFZuSWJIM2ZtMGhJZGZ4TEtsdXlqV19VOHlGQWFqRUROd0dnd3FYbVlNN1hVUHViMlBVbTltNzBJTUNoZXh0YlZyY0RkMndBWjBhZWYzUzh3cXlrbXhBMVpzcmJmZkNBNmRRaW1DRTZJbENRalQ3alBkWGVzZU5pdmtpMlhFak5DZTl2MDB4WE1HeXU2SWdJYkI1V0V5OGdDWkRsdzNpT2ttQW1kTXNlb04yaUFvSTJET08wMEk?oc=5",
    "category": "general",
    "category_label": "General & Media News",
    "sub_type": "Media News",
    "date": "09 Aug 2026",
    "is_new": true,
    "source": "The Hindu"
  }
];

export async function handleUniversityNotices(request, env, ctx) {
  // 1. CORS Preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400"
      }
    });
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*" }
    });
  }

  const url = new URL(request.url);
  const categoryFilter = (url.searchParams.get("category") || "all").toLowerCase();

  // 2. Check Cloudflare Cache
  const cacheKeyUrl = new URL(url.origin + "/api/notices");
  const cacheKey = new Request(cacheKeyUrl.toString(), { method: "GET" });
  let cache = null;
  try {
    cache = caches.default;
    const cachedResponse = await cache.match(cacheKey);
    if (cachedResponse) {
      const data = await cachedResponse.json();
      return filterAndReturnNotices(data, categoryFilter, "HIT");
    }
  } catch (e) {
    // Cache match error ignored
  }

  // 3. Auto-fetch from university & media sources in parallel
  let freshNotices = [];
  try {
    const [cdoeNotices, pareekshaNotices, mediaNotices] = await Promise.allSettled([
      fetchCdoeNotices(),
      fetchPareekshaNotices(),
      fetchMediaNews()
    ]);

    const cdoeList = cdoeNotices.status === "fulfilled" ? cdoeNotices.value : [];
    const pbList = pareekshaNotices.status === "fulfilled" ? pareekshaNotices.value : [];
    let mediaList = mediaNotices.status === "fulfilled" ? mediaNotices.value : [];

    // Guarantee minimum media news (at least 3-10 news stories)
    if (mediaList.length < 3) {
      const existingUrls = new Set(mediaList.map(m => m.url));
      for (const fb of FALLBACK_MEDIA_NEWS) {
        if (!existingUrls.has(fb.url)) {
          mediaList.push(fb);
        }
        if (mediaList.length >= 10) break;
      }
    }

    freshNotices = [...cdoeList, ...pbList, ...mediaList];

    if (freshNotices.length > 0) {
      const payload = {
        last_updated: new Date().toISOString(),
        total: freshNotices.length,
        cdoe_count: freshNotices.filter(n => n.category === "cdoe").length,
        regular_count: freshNotices.filter(n => n.category === "regular").length,
        general_count: freshNotices.filter(n => n.category === "general").length,
        notices: freshNotices
      };

      // Cache the response
      if (cache && ctx && ctx.waitUntil) {
        const cacheStoreResponse = new Response(JSON.stringify(payload), {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": `public, max-age=${CACHE_TTL_SECONDS}, s-maxage=${CACHE_TTL_SECONDS}`,
            "Access-Control-Allow-Origin": "*"
          }
        });
        ctx.waitUntil(cache.put(cacheKey, cacheStoreResponse));
      }

      return filterAndReturnNotices(payload, categoryFilter, "MISS");
    }
  } catch (err) {
    console.error("Auto fetch error:", err);
  }

  // 4. Fallback to pre-bundled static asset if live fetch failed
  try {
    if (env && env.ASSETS) {
      const fallbackReq = new Request(new URL("/data/university_notices.json", request.url));
      const fallbackResp = await env.ASSETS.fetch(fallbackReq);
      if (fallbackResp.ok) {
        const fallbackData = await fallbackResp.json();
        return filterAndReturnNotices(fallbackData, categoryFilter, "FALLBACK");
      }
    }
  } catch (e) {
    console.error("Fallback asset error:", e);
  }

  return new Response(JSON.stringify({
    last_updated: new Date().toISOString(),
    total: FALLBACK_MEDIA_NEWS.length,
    cdoe_count: 0,
    regular_count: 0,
    general_count: FALLBACK_MEDIA_NEWS.length,
    notices: FALLBACK_MEDIA_NEWS
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

function filterAndReturnNotices(data, categoryFilter, cacheStatus) {
  let list = data.notices || [];
  if (categoryFilter && categoryFilter !== "all") {
    list = list.filter(n => (n.category || "").toLowerCase() === categoryFilter);
  }

  return new Response(JSON.stringify({
    last_updated: data.last_updated,
    total: list.length,
    cdoe_count: (data.notices || []).filter(n => n.category === "cdoe").length,
    regular_count: (data.notices || []).filter(n => n.category === "regular").length,
    general_count: (data.notices || []).filter(n => n.category === "general").length,
    notices: list
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=600",
      "X-Notices-Cache": cacheStatus
    }
  });
}

async function fetchCdoeNotices() {
  const notices = [];
  try {
    const resp = await fetch("https://cdoe.uoc.ac.in/notification/", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      cf: { cacheTtl: 3600, cacheEverything: true }
    });
    if (!resp.ok) return notices;

    const html = await resp.text();
    const aRegex = /<a\s+[^>]*href=["']([^"']+\.pdf)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let m;
    let id = 1;
    while ((m = aRegex.exec(html)) !== null) {
      const href = m[1].trim();
      let title = m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      const isNew = /\bNEW\b/i.test(title);
      title = title.replace(/\bNEW\b/gi, "").trim();
      if (title.length < 5 || /fee structure|refund policy|general information/i.test(title)) continue;

      const dm = href.match(/\/(\d{4})\/(\d{2})\//);
      const monthMap = {'01':'Jan','02':'Feb','03':'Mar','04':'Apr','05':'May','06':'Jun','07':'Jul','08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'};
      const date = dm ? `${monthMap[dm[2]] || dm[2]} ${dm[1]}` : "Recent";

      let subType = "Notification";
      const tLower = title.toLowerCase();
      if (/timetable|time table/i.test(tLower)) subType = "Timetable";
      else if (/internal/i.test(tLower)) subType = "Internal Exam";
      else if (/admission|rank/i.test(tLower)) subType = "Admission";
      else if (/scheme/i.test(tLower)) subType = "Scheme Change";
      else if (/assignment/i.test(tLower)) subType = "Assignment";

      notices.push({
        id: `cdoe-${id++}`,
        title,
        url: href,
        category: "cdoe",
        category_label: "CDOE (Distance/Online)",
        sub_type: subType,
        date,
        is_new: isNew || href.includes("2026"),
        source: "CDOE Calicut University"
      });
    }
  } catch (e) {
    console.error("fetchCdoeNotices error:", e);
  }
  return notices;
}

async function fetchPareekshaNotices() {
  const notices = [];
  try {
    const resp = await fetch("https://pareekshabhavan.uoc.ac.in/?page=notifications", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      cf: { cacheTtl: 3600, cacheEverything: true }
    });
    if (!resp.ok) return notices;

    const text = await resp.text();
    const pbRegex = /card-title[^>]*>([\s\S]*?)<\/h[1-6]>\s*<span[^>]*>([\s\S]*?)<\/span>[\s\S]*?href=["']([^"']+\.pdf)["']/gi;
    let m;
    let id = 1;
    while ((m = pbRegex.exec(text)) !== null) {
      let title = m[1].replace(/<[^>]+>/g, "").replace(/[\u200b\u200e\u200f]/g, "").trim();
      let date = m[2].replace(/<[^>]+>/g, "").trim();
      let href = m[3].trim().replace(/^http:\/\/docs\.uoc\.ac\.in/, "https://docs.uoc.ac.in");
      if (!href.startsWith("http")) href = "https://pareekshabhavan.uoc.ac.in/" + href.replace(/^\//, "");
      if (title.length < 5 || /academic calendar|syllabus|fee structure/i.test(title)) continue;

      const tLower = title.toLowerCase();
      let subType = "Exam Notice";
      if (/timetable|time table|schedule/i.test(tLower)) subType = "Timetable";
      else if (/registration/i.test(tLower)) subType = "Exam Registration";
      else if (/result|position/i.test(tLower)) subType = "Results";
      else if (/postpon|reschedule/i.test(tLower)) subType = "Postponement";
      else if (/hall ticket/i.test(tLower)) subType = "Hall Ticket";

      notices.push({
        id: `reg-${id++}`,
        title,
        url: href,
        category: "regular",
        category_label: "Regular / Exam Bhavan",
        sub_type: subType,
        date,
        is_new: date.includes("2026") || /Oct|Nov|Dec/i.test(date),
        source: "Pareeksha Bhavan (UOC)"
      });
    }
  } catch (e) {
    console.error("fetchPareekshaNotices error:", e);
  }
  return notices;
}

async function fetchMediaNews() {
  const news = [];
  try {
    const rssUrl = "https://news.google.com/rss/search?q=%22Calicut+University%22+OR+%22University+of+Calicut%22&hl=en-IN&gl=IN&ceid=IN:en";
    const resp = await fetch(rssUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      cf: { cacheTtl: 3600, cacheEverything: true }
    });
    if (!resp.ok) return news;

    const xml = await resp.text();
    const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
    let m;
    let id = 1;
    const seen = new Set();

    while ((m = itemRegex.exec(xml)) !== null) {
      const itemContent = m[1];
      const tMatch = itemContent.match(/<title>([\s\S]*?)<\/title>/i);
      const lMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/i);
      const dMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/i);
      const sMatch = itemContent.match(/<source[^>]*>([\s\S]*?)<\/source>/i);

      if (!tMatch || !lMatch) continue;

      let title = unescapeXml(tMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim());
      let link = lMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();
      let pubDate = dMatch ? dMatch[1].trim() : "";
      let source = sMatch ? unescapeXml(sMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim()) : "Media";

      // If title ends with "- Source Name", separate cleanly
      if (title.includes(" - ")) {
        const parts = title.split(" - ");
        if (parts.length > 1) {
          const possibleSource = parts.pop().trim();
          title = parts.join(" - ").trim();
          if (!source || source === "Media") source = possibleSource;
        }
      }

      // Normalize smart quotes
      title = title.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');

      const tLow = title.toLowerCase();
      if (title.length < 12 || seen.has(tLow)) continue;
      if (!tLow.includes("calicut") && !tLow.includes("uoc") && !tLow.includes("university")) continue;
      seen.add(tLow);

      let date = "Recent";
      if (pubDate) {
        const dObj = new Date(pubDate);
        if (!isNaN(dObj.getTime())) {
          const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
          date = `${dObj.getDate()} ${months[dObj.getMonth()]} ${dObj.getFullYear()}`;
        } else {
          date = pubDate.slice(0, 16);
        }
      }

      let subType = "Media News";
      if (/allotment|admission|entrance|registration|cutoff/i.test(tLow)) subType = "Admissions";
      else if (/exam|result|revaluation|timetable|hall ticket/i.test(tLow)) subType = "Exam News";
      else if (/syndicate|senate|chancellor|vice chancellor|vc/i.test(tLow)) subType = "University Board";
      else if (/poll|election|union/i.test(tLow)) subType = "Union & Campus";
      else if (/sports|athletics|championship|tournament|boxing|wrestling/i.test(tLow)) subType = "Sports News";
      else if (/doctorate|convocation|degree|award|felicitat/i.test(tLow)) subType = "Honor & Awards";
      else if (/research|discovery|internship|innovation|observatory/i.test(tLow)) subType = "Campus & Research";

      news.push({
        id: `media-${id++}`,
        title,
        url: link,
        category: "general",
        category_label: "General & Media News",
        sub_type: subType,
        date,
        is_new: true,
        source: source
      });

      if (news.length >= 25) break;
    }
  } catch (e) {
    console.error("fetchMediaNews error:", e);
  }
  return news;
}

function unescapeXml(str) {
  if (!str) return "";
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (m, dec) => String.fromCharCode(dec));
}
