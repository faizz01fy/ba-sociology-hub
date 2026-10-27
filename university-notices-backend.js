// university-notices-backend.js - Live Auto-fetcher & Caching API for Calicut University Notices (CDOE, Regular, 15-Day Media & 1-Month Admission)

const CACHE_TTL_SECONDS = 1800; // Cache for 30 minutes
const FIFTEEN_DAYS_MS = 15 * 24 * 60 * 60 * 1000; // 15 days
const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;    // 30 days (1 month)

// Guaranteed fallback notices (Separated General Media News & Directorate of Admission)
const FALLBACK_SEPARATED_NOTICES = [
  {
    "id": "media-3",
    "title": "കാലിക്കറ്റ് സർവകലാശാലയിലേക്ക് പ്രതിഷേധ മാർച്ച് നടത്തി ഫ്രറ്റേണിറ്റി മൂവ്മെൻ്റ്",
    "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOUXh6WFlYbGdCRUVWeUZCcGpZQ01NREJUMEViYllGSUdHT3JKT3RTREY5UjBVSXRPNzEwelNvM2g2ZUFkc1RrLUc0VmY2Q1ZxVTROVlhsNUlCaGJhZ1FhM3N3SWdRa1A5dng4eDNqMkJwQXlhY055anBFYzZJQWdOTtIBhgFBVV95cUxObGplTjUxdzBoQWc5RWNpWnVzQU5GUTRuYmZfQlRRMUk5U3RnQm9NajZ5UU5KTm84bkxRXzd1VGl5N21RZnFWTkpVazl3ekk2LU4zaEJEQVk4X2Z6eGlrb2xqcThaSDJCUGNZNUlrSndTb1hXblcyTzZ5LXpWQV9WRUFLRTVrUQ?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Campus & Syndicate",
    "date": "26 Oct 2026",
    "is_new": true,
    "source": "Madhyamam",
    "timestamp": 1793009695000
  },
  {
    "id": "media-6",
    "title": "11 കോടിയിലധികം രൂപ കൈപ്പറ്റിയ പി.ഡബ്ല്യു.ഡി പ്രവൃത്തികളിൽ വീഴ്ച വരുത്തിയെന്ന്; വിജിലൻസ് അന്വേഷണം ആവശ്യപ്പെടാൻ കാലിക്കറ്റ് സ‍ർവകലാശാല",
    "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOdVhsbER4bVVxbVp1X0NfT1d3TkpjTkxSZkl5aF9kOXNVNWg3Mi1wT0NWUmxyVnNqWjNmRS1KeWg1MnF4a3ZUcjFlR2lMdVBzbmUxZGZwWTV4NC02LWIzNmtiT3BBZno5T2dVdHgtZks2TElmR1dmVUlURXBHOWdqaUN4Q19jU3F5QlE3WWhxdThYSmUwanpMcUJpV0tvN2FRNHlwZE5acWlNM0RvYXJPdDdpb0E2NExSNmc?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Media News",
    "date": "26 Oct 2026",
    "is_new": true,
    "source": "Suprabhaatham",
    "timestamp": 1792987498000
  },
  {
    "id": "media-12",
    "title": "കാലിക്കറ്റ് സര്‍വകലാശാല തിങ്കളാഴ്ച നടത്താനിരുന്ന പരീക്ഷകള്‍ മാറ്റിവച്ചു",
    "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTFBkU0dnY1FEU3hVanZzZE44WVFFa2FqaHR1UXRlLW9Kd1o5bWRlZzdNSXMtaWluMWVNSTBHMGUyUHJBeTRaY2tkUzlyTGNSandvNWxyWlprcjA4RmV1T0E?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "24 Oct 2026",
    "is_new": true,
    "source": "MALAYALIVARTHA.COM",
    "timestamp": 1792867260000
  },
  {
    "id": "media-7",
    "title": "നെറ്റ്‌വർക്ക് തകരാർ പരിഹരിക്കാനായില്ല; തിങ്കളാഴ്ച നടത്താനിരുന്ന എല്ലാ പരീക്ഷകളും കാലിക്കറ്റ് സർവകലാശാല മാറ്റിവച്ചു",
    "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOUlpoQk85bWw5M0ltUXhMbDJNZklQUFVlWlhQT2NkUHJHNWlNVDUzenh6MWlXV0VERThneDdJcVNDOEdBUWRKVjJIUzRBbnA2VlRfY1I2VmZOYVRLZThvb0IxSWtrRlVsNzB0UTZVaERfdXF4Unl2NkstUWVzdEhRMmJBOWpzMWRKNHlMT2NYaGRlV2NiMTRVU3NfalhXQ3NXWjFlQlF1M2EtSmJWWjdYREFTRUNzaUd00gHGAUFVX3lxTE1nX3JudlhaeklkRWdDU2xnZVUzeHpJYnJONEpkWXNtNllZSUJQbEZWcXdtS1VaRGs0SjhKWG5qM1gzdEg3b1NzVHU2dldtMnl6Y0RSQzdOa0dPckV4U3AyVVZ1T1g4OEdHcE5FZzI4SUJHQVppRlFqUWcyYjhBdEE5S251eWdQUUo0Ti16WF9TUzlzMlZmRWcyTXMxdFN3VEVwanBwSDN4c0Z1MU1iM0FWdlpXNF9zWGFXN2F1bGh3MnFaT0E3Zw?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "24 Oct 2026",
    "is_new": true,
    "source": "Metro Vaartha",
    "timestamp": 1792845019000
  },
  {
    "id": "media-4",
    "title": "നെറ്റ്‌വർക്ക് തകരാർ പരിഹരിച്ചില്ല, തിങ്കളാഴ്ചത്തെ എല്ലാ പരീക്ഷകളും മാറ്റിവെച്ച് കാലിക്കറ്റ് സർവകലാശാല",
    "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxObkMxb1lkWHhvWUhOTlJ2anh5WG5ZQ2tuR1NSazRpY0NpTEVWRXVIWUhLa2dHSklJcFdPZFFiTjFRU3JZU0ZyYkkwclpsWVJjLTF6dWJ4VGNtTmQ0dWNncnJjalVBYkprd2paMW9UYUlEc1FDVndKVzN3Q2dBWWZQRVFJUGdCejJlY2tBU2N0OHE5VkM4bThiUVlmYklOWklQWTJEM2pWanVUZkRjNGJlY0E0cFIyZDRuYlgzWVJEMjZyajdSMXVLTmxBUHZjS0d2aGfSAdcBQVVfeXFMUHQ4d0dGQWpaV2hHVWVyQWN2Wm0tSVU0M29EVGZsazhIMkFaaC15d1hWcDV2OThvQmp0M3lVbmI1Z0p3cVRhYUl6QVZVRkk3MlpYVUhpb1Q5eEtPMUNjSnl5NzlzazF4VUVrb2pHWjV5ZXowQkpITVZzYl9uWWo4NXJ3Z1o5aVNVZENvZU9FVG5iTGotQnZYU2VYOVdXZS11WmZpSVNta2lfWEM5U0JZOXlmWmNldXRTelJPbDlYOWJWZzhtQ3g4c0R6aUc0OFVUSEprUE1fLTg?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "24 Oct 2026",
    "is_new": true,
    "source": "Asianet News Malayalam",
    "timestamp": 1792844197000
  },
  {
    "id": "media-10",
    "title": "കാലിക്കറ്റ് സർവകലാശാല തിങ്കളാഴ്ചത്തെ പരീക്ഷകൾ മാറ്റിവെച്ചു",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxOZ012UjhfV3djWmtXZzRaenNuMHZZaHBlUTBlOElmc2NPVjlnX01nR25QLXBZU1ZWQllkdzlmdHJlR3JHc2hJWGZwMXRNTXdET0QzU3ZleHk2YTBQcEZQdVdtUzNfZ2I1X3hlRVBFWEtxUG1CVE4wRV9VM3hka0xfNU9vRWx0VnloUzE4cUVLTVJZQVkwODBLdEQxdXFjaU9WOFV30gGoAUFVX3lxTE5TZ2thbE1zLUNmVWpjNmRTaVJPRXlEaVF1UGRMamZobTlaWnFxWnZZT2RLZHNpckM3V29hbDNZRDhuY2VHemF4VWVQcDRjbWtpQnRLbjBKckJ1aE1JcDBwcHdKVkJ1QUM1cldwOUxhTFVucEx5UmItRHRhaTRmd2xrWVV4aUdwcVV4ZXRVZjRpRExZMzg3OGpvVWVra04tRVNhYlZDdHR0Qw?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "24 Oct 2026",
    "is_new": true,
    "source": "Janayugom Online",
    "timestamp": 1792840716000
  },
  {
    "id": "media-11",
    "title": "കലിക്കറ്റ് സർവകലാശാല തിങ്കളാഴ്ച നടത്താനിരുന്ന പരീക്ഷകൾ മാറ്റി",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOaHZQTUplY1NMeUJuZXYyaHlwb2lYcUNLa1hubVR4MVkybS1YUUNSM1BOYmxFY2ZrdWIxLXRxajlsYTlsMF9SSzdKXzhvdGQ0ci1xM0NGbmdCeHhGc1lpUzFQYWJkaTM4VFpfSUtEMlZ1RWhnMXFHZjdaNVZoVGU0c0tfc1dUT01jekFsMEoxc3lGVlZEbTJjZ1c1a2tNYWN2NXc?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "24 Oct 2026",
    "is_new": true,
    "source": "Deshabhimani",
    "timestamp": 1792837737000
  },
  {
    "id": "media-17",
    "title": "ഇടിമിന്നലേറ്റ് കേടായ സര്‍വര്‍ നന്നാക്കിയില്ല; കാലിക്കറ്റ് സര്‍വകലാശാലയില്‍ തിങ്കളാഴ്ച നടക്കേണ്ട...",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNakhHNlZwczRucFk4OTFNdUE4RHJlRndSOEdOd2M3VDl5RnhRYXV2cWEyY1VaWHBwODd6Q3VKNm51bXpSNV9IbmR1ay1jSmxSb3NzeWlLdV9GZy1TRFI0NXhKWk5FalFicTJnNFhiLUhhNWlGSmZTMlZSMDc3LTh4b2cwaFdMZ3BjQXM4Nkg3SUxUNUJlenVfUGJPRktpQTBNTnk40gGoAUFVX3lxTE1vVHBxT01ZWUN3Vl80TVNjc1hKTkNaVzVpTC1qNWZHaW5hMk1VenFNT0hZajFCbTNmX2RsVHFreDZnZ0hEb21vY1hRZTA0YURPTDVzTTJ0UTBUcklVOHV3WXE3d1NUZWU3Uy1sM1dIcUtsR2lmQ3ZJOFdyZFNjSVRwT0dXa1hlVXRIN0E1ME85NDdubkxYbHB6dTZqSXFiQ0R4NmF0dXI2Rw?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Media News",
    "date": "24 Oct 2026",
    "is_new": true,
    "source": "Media One",
    "timestamp": 1792832903000
  },
  {
    "id": "media-13",
    "title": "ഇടിമിന്നലിൽ കാലിക്കറ്റ് യൂണിവേഴ്സിറ്റി ഇന്റർനെറ്റ് ഫയർവാൾ തകരാറിലായി; പ്രവർത്തനം സ്തംഭിച്ചു, പരീക്ഷകൾ മാറ്റി",
    "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQeVh6T21aQlJHM0JRc2s4U29OZFBsOTVYUHI4b3BRMlI5ZjB1UnpILWUyMzdTdFR3WGNKZjhUNF9rdjJZU0pCMDV2bnNyZzFaRmxBWGVxU3pqTDFocUhDR291bXgxSzhuLXpqeTNWdnpGWWxlUF9FUHZqZ1lTaGwwaUZ3TGFIbkJPRGNzU3lLZ04xRlBfajV0YWhJaG5QQlBVVFJyRUxB0gGrAUFVX3lxTE9DR1JHdjI1S3h3VzlWbzI5UDZvREJQMExRRGt0cFpGNi02MGxNZGFaTnliVzYwRzEwMmlyODR0LXFOVzVfRDR3RVllR2FQYjhxZzNNSXI1T0kwaU40WmJCcEZpUXhFTHlvMVpOVlJ4ZWFVbFVpNUFzVDM2dVlmVXl6N0h4bC1tcUFnb1FORjNvem55S2FLbXhob1Q1YVFMekN0LWI5TkdpS3NGRQ?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "24 Oct 2026",
    "is_new": true,
    "source": "Mathrubhumi",
    "timestamp": 1792806842000
  },
  {
    "id": "media-22",
    "title": "കാലിക്കറ്റ് സർവകലാശാലയിൽ നാളെ 'സീറത്തുന്നബി' ദേശീയ അക്കാദമിക് കോൺഫറൻസ്",
    "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOaV8zOEFZZ0tQdVpCeGdjVkxBazBENEVLTXIxcEF5b1NjalBrQXd3SHg4S1JMRWV2YjloNXZoLUxsbEtnbUVkdk11X1VQV1RoN0kyT3Q4RzlRLWs4T1JGOGdqUmZqcjN5dF84cXVPb3JzTTU2MW5FMWhBYk1mc3l2V01RVFFyQktvUnZFVk5oQmw1ckR6dEJpTDFRSUxpbGhZNERfWGZHSlE1YnJPU1J3djZ6X052ZjZTU1BJ?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Media News",
    "date": "23 Oct 2026",
    "is_new": true,
    "source": "Siraj Daily",
    "timestamp": 1792767111000
  },
  {
    "id": "media-18",
    "title": "ശക്തമായ മഴ; എംജി, കാലിക്കറ്റ് സർവകലാശാല പരീക്ഷകൾ മാറ്റി, ഇന്ന് അറിയേണ്ടതെല്ലാം",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPOHVGMEQ0U19uanVrYmc3d0R3Z2pNdVN3LXhFUThJWHhBdTdWdFdkYlI3Z0F3UWlGdTV0cXUtMnVyVko5SXZSUy0zV01vS0t6dXRQUUd4c1Zzc1g0VzdMWUd2UFV5U21peU9sR2drX3BaSGJhMGViUjJiYkZOYVRVZlh0UDU4M2xQTVphQWRjZ3l6aV9VaDg1WVJYZWNJbzYzbnZsaDZSUXhWY2FCWC1LVS1tQ1NWS1nSAbwBQVVfeXFMTnRwVWNPTEo4ZU92d05zS29tTWpOYTdOc1BVVmppSkp5a1Z2R2Y4V09pb2ZEdnFURUhyUTFTUnZBVVVaSUZCOU83aXIxUkxwQWx0by1OUzBwZHgtekY5ZGUtZGJ4STg0NnR6TG9maEdKX1BDVlRLVVlPc1VJLTE4RzJ3Q0M4ODFCcDNhaDVoTURpamlrRXVUMzN2UFAzcmoyWWNPVXlRbXIzMmtPSDFwX1JOd2h4bEZ1UnRDLWM?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "23 Oct 2026",
    "is_new": true,
    "source": "Asianet News Malayalam",
    "timestamp": 1792726449000
  },
  {
    "id": "media-23",
    "title": "ഇന്ന് നടത്താനിരുന്ന മഹാത്മാഗാന്ധി, കാലിക്കറ്റ് സർവകലാശാല പരീക്ഷകൾ മാറ്റിവെച്ചു: പുതുക്കിയ തീയതികൾ പിന്നീട് അറിയിക്കും",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPb3Nob3NEYTYwQ0pGaU15UFBOY3o1dnpManR2OGRkSGlDUmsyUG5Ea2ZkcVNuLVVXdnJqSTdaN2oyWGk5QWJra3I2UnVLQk5oN3liYjE5UFlGNUZ3eTF0ZjI3QTJxSHQwRVlOSnBGWS10bDUzallSSjVCX3A3eC1OOTQ5SklRUUF4QU4yMnZxQ201SFIzZ3N0VG1FbGk4Zk1MbWtKbW1ja3FKNmQ1?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "23 Oct 2026",
    "is_new": true,
    "source": "Times Kerala",
    "timestamp": 1792721666000
  },
  {
    "id": "media-5",
    "title": "ഇടിമിന്നലില്‍ സെര്‍വര്‍ തകര്‍ന്നു; ഇന്നത്തെ എംജി, കാലിക്കറ്റ് സര്‍വകലാശാല പരീക്ഷകള്‍ മാറ്റി",
    "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPRlRoM1c4S2U3Unk2ZGp4NVlraUpoVGhySWl5STNGQTZaX0VMREZtSi10d3NLQjBMWEZ6YVZkbkNMeUFUQ0lyRlZHVkhvUDFibUFHNTZta3FNVWxKbjh4cHBYVlpWdVJsYl9HY3VOaVo5Zjh2eS1heGNIWjdfblYtUkhBYmRKUDhscEphM2IySWV0RmRFd1BVS2t2ODJNTU85eUNUSVJURVE5OTNITURwTnBsVXRYZmE1Si1lSmRmSVNmTkx2OFk2SlNn0gHXAUFVX3lxTE0weDFrQjVOVElmbXJzZXBmWXNNV25Gbnl5ZGRLVmRROU01dzhreVBsMFd2TDhqeV9UQkVQUGpaSDRKbWhQeV81d2hGMXM2QXMtZTVlSkVyTVBQT0FwMmNMZXBBZ19Jb0tlNXJndmJMRFR4aV9XaTF0NHd5U2gtczJhTWRsUkhDS25URk00alduUU1YbkhVMjRHRXZ5M0RqMGFua2huaU5hTndXY3g3MUlVVTNXSjFGNjZaV1R2WTh6QWd0SC0yZFk0N2ZCdHBPQXNKc2pJNjV3?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "23 Oct 2026",
    "is_new": true,
    "source": "Samakalika Malayalam",
    "timestamp": 1792717443000
  },
  {
    "id": "media-27",
    "title": "സെര്‍വര്‍ കത്തി; കാലിക്കറ്റ് സര്‍വകലാശാലാ പരീക്ഷ മാറ്റിവെച്ചു",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNWlRDTFBrbTJsYkpWb2VVbDZqMGpGeGk4cjk1SkI4QmNoLWt6T2g0Z09WY0tLTU8yUE9ScUktOVNuVDcxOTJQTm92dDh2QW5vRmtYa0RDWE5PM1dzN3JFYXR4WFJ5aXZIczBBQ3F0Uy1OX1FWeVJZTWdFbkk1d1hxLWNvNmtGUlJYMkE?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "22 Oct 2026",
    "is_new": true,
    "source": "Siraj Daily",
    "timestamp": 1792700154000
  },
  {
    "id": "media-26",
    "title": "കാലിക്കറ്റിന് പിന്നാലെ എംജി സർവകലാശാലയും; വെള്ളിയാഴ്ച നടത്താനിരുന്ന എല്ലാ പരീക്ഷകളും മാറ്റിവെച്ചു",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPNFFwczJxdVljbW5ROE1jR3pvZzNfaXE3WXVULWlEeENCdzV6TVRMaUY3MC1QOGZyY013dXJPSHpMUWNESzZMNHg3VmQ2czJIU2UtQ05fT0EwcHJHUlBTbzFENlZZVU1BaEpkR1h0YUl4YTRHNDBXUXIyNDFtcTgzdGk1aDlOSnpCTm5IeFpDZ0Y0ZjR3ZElUNlA4dEVTaGw2ek1wQ0M5YndUOWvSAbABQVVfeXFMT3N5ZzB2dHZwc0pyUEVaT2pNelNXdTF2aWJjZTlBSE1kZHFFNWlSOEZuQzFVN2NCM0w4NGg3Tld6WGtneURXbG5HZVRoamRwLTZJU3hrNDRVb0FxUDAtZEE1MXoxc0pTaF94RWtVV1lrNHIydUROTHBDU2JzY3RSZXp5LU43VElzanhrVVEzMmlYZlFENmo0TGEydW1keFpraWdZWjhrbXgzdnRob0VhOG4?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "22 Oct 2026",
    "is_new": true,
    "source": "Asianet News Malayalam",
    "timestamp": 1792698159000
  },
  {
    "id": "media-20",
    "title": "ഇടിമിന്നലില്‍ സര്‍വര്‍ തകരാറിലായി; കാലിക്കറ്റ് സര്‍വകലാശാല നാളത്തെ പരീക്ഷകള്‍ മാറ്റി",
    "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPUlowZWRUbnBiMDJLTWxMbDlkekpESnZSVDNMUldwby12ZzhPSmIwY0ZITWxmSTRTbWhlVlVmZ3ktVTZiQURjMFF0UjRPQUtNQ2ZFRFFWeGxqb0l4RHZKQm5Vc0pZbVhsZVdxQXpnbGx5V2NtdGVteWZsNTExMFB2UHJYVmhXZFc0UGUycFVsUjZ4SlJ1a1pKSUFGNDdWNVgyWFNCV0QxMlZXNWFrR1JnYVN6anA1RzBxVXfSAb8BQVVfeXFMTWUzbjV4S0ZnLUhmSHdURE1YcjZyX1BJWVVsTTRjc0htc21SekpDa2hWRnh4QUhqamNhVGtjOTNTU0JSU1R6cFFPLW5oQ001RG9xX2gwSnMtN0lnS25OYVBmUHlLbnNZbGpmaGFYdE9PRnJQSWlCSTFEaWhkNXMxYjFJckltazhWSlZQb0xqamtWMlJ5VGpRdXRHTTcxb2VWVGtEaEdxWDdiekRTMEVBRWRaMXhCREhyMmNDQ2xUTUU?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "22 Oct 2026",
    "is_new": true,
    "source": "Thejas News",
    "timestamp": 1792689690000
  },
  {
    "id": "media-9",
    "title": "കാലിക്കറ്റ്‌ സർവകലാശാല നാളെ (ഒക്ടോബർ 23) നടത്താൻ നിശ്ചയിച്ചിരുന്ന പരീക്ഷകൾ മാറ്റി വെച്ചു",
    "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxNcF9CQmh5dlVOSGdvNFJNRDRhWDY3bEFGNC1mZUVfdGZhQ2VNeG5aU1dwS2NkSUIwcmpad1dHMTk5a2pWSlhoT3lPM1JsWGJLdEVwLXdScXhyVW5Bd2xnYXFOT0laR0VoU1VObVhaSjZGSWdtakVIYUZncUFXYi1xNGxfaGdSa0gtdW5FZ1hReVNFU3kzS3VCOHE3RXhYTkFyMGJDcE5LMEc0VHVRYnhUOW00bnluc1l0NndiTnlrVWhtRjFhY05ZRk5oNGJ3TWt5SnNPdVdPSlBNcXVXRWpCWQ?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "22 Oct 2026",
    "is_new": true,
    "source": "Kerala Vision News",
    "timestamp": 1792684587000
  },
  {
    "id": "media-14",
    "title": "കാലിക്കറ്റ് സർവകലാശാല നാളത്തെ പരീക്ഷകൾ മാറ്റി; ഇന്റേണൽ, പ്രാക്റ്റിക്കൽ പരീക്ഷകൾക്ക് മാറ്റമില്ല",
    "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxPTm9xNENJSXQ5Z1U0bkhlMUtrMTVER0g3bVE4bF80OF8yakhHdEljeE5zOXJZeXFOTF9kbndoTEs1VU1jbW40Rmdsd1V0VE5nRnFmTzd2U1NfX21NQVQtZkR1MkZUNUE5Y1hZN2lsSG1tZlpyNU55RWYzYmNSSW5JeWNRT0Y?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "22 Oct 2026",
    "is_new": true,
    "source": "Jaihind News",
    "timestamp": 1792684500000
  },
  {
    "id": "media-15",
    "title": "കാലിക്കറ്റ് സർവകലാശാല നാളെ നടത്താനിരുന്ന എല്ലാ പരീക്ഷകളും മാറ്റിവെച്ചു",
    "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxOWmczZkJVdXlZclEyTzNhUWJhanNBM2lROUFHekJXUW5UMjBUcVV1WU1NX2xBS296UXV1RmY0SU5QaXpGdmZqTlU2MFJ4cnU2Q0VCa05nUlVyT0FoN1NQUy1mMTlCeXdzTkRPZGZ5QVN6NnUwRTd3cGtjUVNZYXN2TUx2QTZiR2lFcGVWWThQM1FpS1RZcHdmSjYxM0RRazRzc25YUmhxQjU2WkNyX3NGX0lrZGNDQ0dWNi13dko4WEwySHYzXzI4N2RaS2xTRGdvVjJSTUNQWXZNUdIB3wFBVV95cUxPZ2pKNk9DbWhLNmdoR1BZb2cxdTZiWENQTWxFSUJaQ0lUbmEyOG1aUTk1dkU0eExyY2pWQkRZWmpZME1qUnl3NThfdjJ6R1FEcVp4bENTSTkxeDB1Vk9PcnpHZGZTRFdRX2EwOHJDQTJ3U3VrSW1QMk9UZEhTc1ZRYl9TckVneXdBZnFxaDhwanJDSU53cUlDNHJ2dE1MUmY4MGc3elFyVUxtQ19BZDV0SkQ5cHRxVEJwNVVUajBvMHllTWZYUlN2cGZuM2FJQktweHZUbnZSMnRKZlEwVVpR?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "22 Oct 2026",
    "is_new": true,
    "source": "Asianet News Malayalam",
    "timestamp": 1792683512000
  },
  {
    "id": "media-16",
    "title": "കാലിക്കറ്റ് സര്‍വകലാശാല നാളെ നടത്താനിരുന്ന പരീക്ഷകള്‍ മാറ്റിവെച്ചു",
    "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNWTd3X05RMG9WVmxrc3JTOXRqMTFlWWE0aFA5djYybUtJQWpFVUltZmZXZ09TY3g0UUFkZG5vTG9rUFYwaWlNel9vRUhoSElSOThkbTR2a1g5clRQSENnWFFwbWpFYktpaXBVaWVTblY4bFJkU1NjRnRvOHE4cFBneElWeWY4Y0RXejkwYXQyNHE0cDFDa2c0dTMzSDIwbHVsS2k0N0VB0gGzAUFVX3lxTFB0NldVamN1Y2hoNnZTWlJTVXM4SWlOOUhBU3ZVVjdVZlhpakd6SXBqakFaNi1nc0x1MGV2VldURzdIWXc3eG1mWHBTYnlYSE8tQVRzclZydWpucnFkTjJlOV92R1paQWpmVlhpWU11cmNXYmRnWmRva0lZdHNrNHc0Mmg3X3MwRDZFd1RtWnRXUm14UTZPN2gzSFFnM2ZHa2dMT2ZSbUYtSEh4WmlVU2xmR3lv?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "22 Oct 2026",
    "is_new": true,
    "source": "Samakalika Malayalam",
    "timestamp": 1792683397000
  },
  {
    "id": "media-8",
    "title": "ഇടിമിന്നലിൽ സെർവർ തകരാറിലായി: കാലിക്കറ്റ്‌ സർവകലാശാല നാളത്തെ പരീക്ഷകൾ മാറ്റിവെച്ചു",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQeWI2SEV4Z0ZBeWVZV0h6dXJseW5DSmVSZ3FJZHhaS3gyMXk5d0VjVlE5em1PUkhGTzJUOFRGemFXSS1tLUttMV9WbktJWk5hQzFNaXJHeDZrMFRVb2pXVWRaS3RSN0J3TVI3SUJFM3ZqYlE2b2ZFRk1vYWxnVTg4TVNVOWp4N3ExQUJTUnZrVmdaVnhsZ2g5RldYTmlPTVduTG9IONIBqgFBVV95cUxNY2JGU1pzVFRJdGVSeDN5SGRmR3ZzUEFkVHRoN1dFaEJQQ2U4d1czYVVrR1VwNWN1bmlFeHdtcndrRUU2MXk4b3pMU1RuTGl4QnIwWkdmOERkWi1SSzY3ZjFHUVBXUVR6YV9lSDV2aXpsN254NUw0Z1dBQkN0OXQxeDBhRFhLVTBONjAyZVFhcEdFNTZDTDVza1p2R3FjRGQwWEJxOXhLaUJJdw?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "22 Oct 2026",
    "is_new": true,
    "source": "Media One",
    "timestamp": 1792682669000
  },
  {
    "id": "media-1",
    "title": "Calicut University boards row puts Kerala's UDF govt under fire over 'Sangh links'",
    "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxORjMzUlZSdWZibnBIcjJKMnMwdGUxcG1pdjdkc2FkVGs2VjR0LVJCX3RXWmp6NUxMY0plbkhJUmFEX0JVZ1h3X0NiMU9Sd00tR1lYTVozd2U1RjFJWXVPeFhNOVp3cmg4QzI4QnJXbmJnMnNmd2xLdVh1bzZpNGdYeEJpMVpLTkhMbEkwUGxSM3pHMFFkZDRPQzgwU0dzbjE4am9DMmRIa3p1VDB2U1ZHV1lDZnBZU1k3?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Campus & Syndicate",
    "date": "20 Oct 2026",
    "is_new": true,
    "source": "The Federal",
    "timestamp": 1792472814000
  },
  {
    "id": "media-24",
    "title": "കാലിക്കറ്റ് സർവകലാശാല അക്കാദമിക് സമിതി നിയമനങ്ങളിൽ സംഘപരിവാർ സ്വാധീനം; യുഡിഎഫ് മൗനത്തിനെതിരെ എസ്എഫ്ഐയും ഫ്രറ്റേണിറ്റിയും",
    "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQT2NFLVVKTkR2SzVOU0gtd2FxZGxBQ1RITWxPM2s4UmdMNVVDZHo2QlBKTUNhM3I3SGI1T0taNzF6QmhpT1RQVjBaMnh1aGVpTEplb0szbkpKcDZCX2xPUWNTeHFUMlU2TmFzWGJ5dDg5N3VfcDZoNlE1X3JBQUVtSEpoSjdzVTQ0NTB5Z1NIZks4UVotVXNWLWNSRjBVd1ZFQXhsSU1Pd2lhVlFmSnVVdXhpRU55a3o0Zk5kZlR3b9IBzAFBVV95cUxQVVoxRXFhWm44czhjcEdIcjU3VVpiRTlIeU52NDZXMmZtWXJTRWJ3TFY1WjBsRnkzSGc3U2tfVFlrTmVSUEYwZzFXVkhlRC1nNzdrUXVITnlPcU9EUVZ5bk1aRmx4UnJUM1VZQnlHU0ZxWm1yb3ZrYzFLdlhUZHBBZWxCZkxEQU8yejVkNWJBRjZZZ1hHOGxGOTJQUnRDTTlJS180ZnBvSFh6N1lrc0ctTVdUUTFxVjJmbExoRGxRaC0zd1ZlQ2ZjbkdrS3c?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Media News",
    "date": "19 Oct 2026",
    "is_new": true,
    "source": "Samakalika Malayalam",
    "timestamp": 1792427076000
  },
  {
    "id": "media-2",
    "title": "Supreme Court upheld the selection in a preferential appointment dispute under the Calicut University Act, 1975. A temporary leave vacancy appointee was held not to be a discharged employee under Section 57(6), and thus had no preferential claim; appeal",
    "url": "https://news.google.com/rss/articles/CBMiaEFVX3lxTE9aZ19fOXVjelJ6SzZfbmZpYmUzbzFHNWxCbXRqTHYxd1libmtaMlg5aXFMYlVBMnhwU05aRVNlVHQ3ZkhzVFlVV2pDRHNaX2Y4X0dBOEtIMm5ZOFd3NWtCSjEwZk1od0lt?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Media News",
    "date": "19 Oct 2026",
    "is_new": true,
    "source": "Lawtext",
    "timestamp": 1792402809000
  },
  {
    "id": "media-19",
    "title": "കാലിക്കറ്റ് സർവകലാശാല പഠനബോർഡിൽ മരിച്ച അധ്യാപികയും; യോഗ്യരായവരെ മാറ്റിനിർത്തിയെന്ന് ആരോപണം",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOcWt0WVNEaGxDeXI2V3ZObHNCd2NjUUI0N2lpS3BmWXBwVjY4by1NbF9QZFc4RldrVVFZN2FSeWZvbDJwcFVxNnFZM3BTdWFMbzNVQ0R1azR2ODlQMXF4VG9jQnRieFJRTkJJU2otRUNLbmJkZ0ctZ3o4SWlKXzFCSWtYLVhzdDgwS0NDWXV1NkVvMWRLNzJ3RFk4Y3HSAaIBQVVfeXFMTVBVdWNhLV9PcW9ISnBLVFQ0ODE5MkNqLWhQNWdZcnRVMWtnMno1WjM1MmhOVlIwUEpmcWRtVUdYT0YzYWFkWUFweXA1UEs2cDZqZV9zM05uRmt0c3NGQ19NTEx3a3hOQ18xbVhsUmdYazllamowSXB0dG9zUWJ2MUhrQ0oyNzgyQVVZbFpValFWNGtPRnVzSW9GbjAtbDBOQVh3?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Exam & Schedule",
    "date": "19 Oct 2026",
    "is_new": true,
    "source": "Mathrubhumi",
    "timestamp": 1792377651000
  },
  {
    "id": "media-31",
    "title": "കാലിക്കറ്റ് യൂണിവേഴ്‌സിറ്റി ബോര്‍ഡ് ഓഫ് സ്റ്റഡീസില്‍ 32 സംഘപരിവാര്‍ സഹയാത്രികരുടെ നിയമനം; വി ഡി സതീശന്‍...",
    "url": "https://news.google.com/rss/articles/CBMiqgJBVV95cUxNQVY5Y3E4QUNVQkRaU2EtMndmUERnOHBua3NUOGtLUGdoZmRnWXVLZ0Y5YkFwbjI0Y2U2Qmg2N0tnSTlCdHZ0V3U3NjRKeWVpOTJRV2EzM1ZIZ29IM2paU2R0U2M4WDZWUnBuZ0Z0VnBKVUo1Zmw0bFJWSG4xZk8wT3NBSEFPak9SNUFwV0FySEpad2VCRWJueEZJbUZZZkx1WVVmc2o4Z1RKemgtNklqY1F3VDFZOHZiTXlreFdLbHlQNThTLTNsdUNGY2NNVnB0dW1hUDFCbXVVSm85NGlkTHFfVEdvVHhJVFgxNE1yWEpsS1JhT1hRRDhUcC1VdzlvUnAtclNxT1lXVXdqa3ZjREYzQ0RYMUIzZk5pclc4OWtVcmtXX1dqeE9R0gGvAkFVX3lxTE9SVDRUYWhZd09jTUp6WGJIUEhfSkdwaVRFWWVqQUNYRVdDSVFxczZZeDFSSkNtajJmZFFSMWkxZHVpYnVrRlpnYi1kUlBJdTBxS1F4bmdsck52OG5EbDBTdThkX0E2ZHRrak1FNFVTZVh4N1FIUEctcExZX0t1YlJrcjlRMHIyUnVoN2ZNamNHY1VHTkpOamxTc3hXdUxScS1qc1F2MW1uTlh1YTNkX1RHX1ZXb1V6b3ZSOHBlakc1bF91eHlnYmQ4VHdIdUZHc1NjVGtTZEM2N2puZXdwNmZqSVU1N0l5bVNMUHVVRUxMendwMjlzVDl6bi1JNmdxV2Z6c1VMN2RjVmpUMUs1SGFoVFN1OE1EU2dVejVrOG55NklEclBiRVpXRExiMUptZw?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Media News",
    "date": "18 Oct 2026",
    "is_new": true,
    "source": "Thejas News",
    "timestamp": 1792328799000
  },
  {
    "id": "media-25",
    "title": "കാലിക്കറ്റ് സര്‍വകലാശാല പഠന ബോര്‍ഡ് പുനസംഘടനയില്‍ സംഘപരിവാര്‍ അനുകൂല അധ്യാപക സംഘടനയിലെ 32 അധ്യാപകര്‍",
    "url": "https://news.google.com/rss/articles/CBMijAJBVV95cUxQY3ZOaGMzUlFwTmhlOGxRRlRqT1IxZFNuWjlxTjRrMHZSUklCeWptRzhtdnhDX2loanQ1UzBpcVhvU29oWUhoRlhldlFXY05MNU1teXBqOU1BNHVlcGw0RGRjSWlZQl80WVJvdF8wMVpTQkgxOGM2c2JSWWdEWm0wa3N1a1EtVnk1TERPMEdHbTVhWWZRTTlkb0V1NF83ekVaN2ZFT2RCdFRKX3RtYnZ3aVc3elZWdzRtaXN1azltcW9ZQUJBa0k2M2s2cG1YUktYOGU4aHJrbmUtVGxxbTdYSTZjc0dxSzIzWm44bl8zelE1c0QydEJmUUNnV2UwM3Y3OF9VVF9Pd1NtTWtU0gGSAkFVX3lxTE9qamtaMWx2MDIxQ3dFVXA1OUdfSVN4N1pPU01icHVsUkw4cnV6NXNsc1RqaWdPenI4R1Z3X0UxT281dmdJazFaWGhERVdxZmthREdkTHZsQkIzSEZnZWhlQ2xLbTVsQnlLdk83NG1KcW54cGQzTFRMQV9KeXVMY0xuNHVzUGdQa09JWFp5TUd1NkFtazJZdHhnUUV1R0xUbTFjNnVDWENiRm9GU2owRUhGVl9vVEwwSUNpSm01a2djZ3ViWmFMRmg4RUNuZG9jc0RmZDNPVXppYmpnYXNmOFg3WEdMOGJVYXg0bFV3eFhRblFMY2RsRTNSTXVnRV95U2dOYnQwVW1ockFhSHNyam4xNUE?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Media News",
    "date": "18 Oct 2026",
    "is_new": true,
    "source": "Thejas News",
    "timestamp": 1792322152000
  },
  {
    "id": "media-29",
    "title": "മരിച്ച അധ്യാപികയെ ബോർഡ് ഓഫ് സ്റ്റഡീസ് അംഗമാക്കി കാലിക്കറ്റ് സർവകലാശാല",
    "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5xeFR2SWtOekloTFRKUHdEZzZUSjVoRDN0S2dXOFVmXzlFNXhWVTNYd0ZZVFZMLUs4eDVjeGZzb3VDWTd4U0E1YXRseFYwMzA2TktCbUljMm5PQ2dVQVFxRjU4TFdJT0YyYjRmTEtaWlR2Q1ZjSElvbGtkNkVoZVk?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Media News",
    "date": "18 Oct 2026",
    "is_new": true,
    "source": "Deshabhimani",
    "timestamp": 1792320031000
  },
  {
    "id": "media-21",
    "title": "'UDF സിന്‍ഡിക്കേറ്റ് നിയമിച്ചത് 32 സംഘപരിവാറുകാരെ'; കാലിക്കറ്റ് സര്‍വകലാശാല പഠന ബോര്‍ഡ് നിയമനം വിവാദത്തില്‍",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQZFdfelZRRS14UW95SDZLWW1EcWRqVUtLRE5VS09KZVB4Qk5UU1ByQWJDN3pGUWFweERIejNnaERJVUVibVh6OUlOLURLUTN2OF95UTExeDJSRnI1UFNOQVNRdXVLZ095UV95X0RRY3VkeEdTOVkydFJTSlZrbE0yNUl5SVZTcEpQM3FXUS01T0ZxbGNjdnZ2UkxIOWxnekY1ck9RUlRMSnU2M3RwN284dTFkWdIBuAFBVV95cUxNV1FYeUt4a2VSOVhXTzNhT0l2T0NYd29WWkJRSzVMVW5ORXR2cm9nV2haajM0SU1BT2xYTUlVS1hFZkVLeEJGQW5IbkwwQi1oQnNsbzAwWThxM1ZsN1VIN1Zmdkk4dWtGekRrZmJLUWtxUloxLUxTVm9pR29Pd3BNYm92R2ZUcEFrNGNtcUs2SFdjZS1PTFhyUFZSZDN3bTQtYzhnQ19lUHNNd3E4LVE3ZmtpQWRkMzZU?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Media News",
    "date": "18 Oct 2026",
    "is_new": true,
    "source": "Reporter Tv",
    "timestamp": 1792306597000
  },
  {
    "id": "media-28",
    "title": "ഉൾപ്പെടുത്തിയത് 32 സംഘപരിവാർ അധ്യാപക സംഘടനാ പ്രതിനിധികൾ, കാലിക്കറ്റ് സർവകലാശാല ബോർഡ് ഓഫ് സ്റ്റഡീസ് പുനഃസംഘടന വിവാദത്തിൽ",
    "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQXzZkS3ktblF4S3lEb3phMzUxTWFoaHVtVkNrTjNpR2NLTWhnTWd6MzRJWU9RS1NDdlFIMlVDMW95NWJHeGFPNXpKaWpDdFBLNTBTMWRlVUw2czNMZWt4MUpZRmdFTXFRSmgwaEtXT0R4UFl1Mm9yNGM5NmVxMW15cElQYW9sSm9GS0dycVA4VEVTNFRpWjlmVHJoZkNnMloxdUlRMlhrN0IzYXpNb2VPYXFjdnhwZjFzTFFrSERTaWJndlU3VGdvMzJfSjVlSVl4ZldiU3l0NnLSAeYBQVVfeXFMTnFFeFRFaWVOWnVEbElGYzhCOU4teWhhUkItLV94RTBMOFlUQ1kwdGtlTjJaNjdwN1dsOFRFSWVFTWRjMU5wWktFZ3h0cWsyVFBJUmFMUi1uR1dWY0xDdkNxbHktaVJzVk5NSEdyNFBibFlsN2gxOE1fajZMaXhYT29QX1l1eDZKbmlzN1RJQlk2aFNQUGluZk13Tk0za0RGWnU0ZGtXTjNNWVpxLWtPYjlXd29VTzNRTDJrZ2hjNVpwYndGbjY5VHhVN2FSc29tVjZYSllaR0M1R3lTQVEzSl9lQloyTWc?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Media News",
    "date": "18 Oct 2026",
    "is_new": true,
    "source": "News Malayalam 24x7",
    "timestamp": 1792297208000
  },
  {
    "id": "media-32",
    "title": "College union polls: SFI claims victory on 30 campuses in Kozhikode",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPTXU0cjBsbjNzUFRhSzRWdWxBNm1TTVQyQ20zdTF3Tm9UM3A5OUFIYkJ3SklJUkJOcGNkS2hVdGZ4dWRFSVVQdldQU0tyODVaLVFobFBoaExEeFY5SENPdkZ3R1BBeG5jR0dkZnVkMzlEakhHRDZXSWNVVm1fWl92S1Q5eHBrYlVITmhPV3lNQ3V3Y1RoaVloYXVveUxrZjFVblRBU3E4X2dPcnJoZUx6cUt2dW9aLXUwYjJmaDVNYnY0cktDX2RPc3A5LWbSAdMBQVVfeXFMTWFvcGRPWmlKaUo5OE9rUkdwdTFHTVA2NjRJUzltU2Vuc1JoMUVDR3pUZ3ZHWE95RXB3ZnlpLVdFNWRCaEtheG1YM29rQ1pJeElrNk1jcFQtR21FRTN5TUlYOTVqa2VyTDJIU0tjYXhKNjZpMmVsanUyMEQxcmZlaG9HN0RYb2FLWDRPdkxLdE5fSHQyZDBuaUtNTUhkQUJMOUVNaHlJdkY5em9tc2E4bHJKcDA2TDBfZjF5YjcwdTFVU2FuQkE0a0NSYmt1LUd5TG9Ubw?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Media News",
    "date": "16 Oct 2026",
    "is_new": true,
    "source": "The Hindu",
    "timestamp": 1792134000000
  },
  {
    "id": "media-30",
    "title": "കാലിക്കറ്റ് സർവകലാശാല യൂണിയൻ തെരഞ്ഞെടുപ്പിൽ കോഴിക്കോട് ജില്ലയിൽ എസ്എഫ്ഐ മുന്നേറ്റം; 48 കോളേജുകളിൽ മുപ്പതിലും വിജയം,ബാലുശ്ശേരി ഉൾപ്പെടെയുള്ള കോളേജുകൾ പിടിച്ചെടുത്തതായി എം",
    "url": "https://news.google.com/rss/articles/CBMi0gJBVV95cUxNTUNqMXNncklXT2ozOERkYnRwbkRWVTZNOUpXN09xZkpsTnlKZ2lqb1gyZnZmbkVlNEltbFdiel9RWnljdmMySkw0OHFpRzNvMGkxcUlPUkRJUzlKT1J6ZWZXX1hpY3IxcmhsZkVhR3ZQRHBRcERYWHNZWkttbzFHbUxQcHNMOW9ZMHkwTS1YRFhLRjMzclVhbHNyS21tUDU0clBYbUxPN1djc1dRQi1LLVlfNTNJbG5tWlFWTF9wTEM5cVRweXozNmo4RHRlOVlSQ1czYlVVbW1kQ0RLR0xsOGdfdDBDZ2pkd3MwNTRjUjMxS0YyanRYMkZTdVZUa3BOZUV5ZENsLXc1VHhiam1Sd0NvZHFSTmxzR0FSMk9rdmdBcmZ0MXFZQnJMT1FYQzRJTml0LTJ0MTJMZzJBQVNBdDIyWVZWZVdmZDcwNE1XeWhNdw?oc=5",
    "category": "general",
    "category_label": "CUC News",
    "sub_type": "Media News",
    "date": "15 Oct 2026",
    "is_new": true,
    "source": "keralavisionnews.com",
    "timestamp": 1792083408000
  },
  {
    "id": "doa-39",
    "title": "PhD-2026 Last date extended",
    "url": "https://admission.uoc.ac.in/downloads/1793013440_Press_Release_PhD1138.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "PhD Admission",
    "date": "26 Oct 2026",
    "is_new": true,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1792972800000
  },
  {
    "id": "doa-1",
    "title": "PhD 2026 : Notification",
    "url": "https://admission.uoc.ac.in/downloads/1792216457_Notifications_PhD4293.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "PhD Admission",
    "date": "17 Oct 2026",
    "is_new": true,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1792195200000
  },
  {
    "id": "doa-40",
    "title": "PhD 2026: Online application commences on 17.10.2026 at 11.00 am",
    "url": "https://admission.uoc.ac.in/downloads/1792154399_Press_Release_PhD6638.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "PhD Admission",
    "date": "16 Oct 2026",
    "is_new": true,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1792108800000
  },
  {
    "id": "doa-41",
    "title": "MPEd (CUCET 2026) - Last Date of online registration extended till 22.09.2026",
    "url": "https://admission.uoc.ac.in/downloads/1789540165_Press_Release_entrance6904.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Press Release",
    "date": "16 Sep 2026",
    "is_new": true,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1789516800000
  },
  {
    "id": "doa-42",
    "title": "Afsal Ul Ulama 2026-27 admission - Extended",
    "url": "https://admission.uoc.ac.in/downloads/1789125666_Press_Release_afsal8926.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Press Release",
    "date": "11 Sep 2026",
    "is_new": true,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1789084800000
  },
  {
    "id": "doa-2",
    "title": "2026-27 Late Inter-University Transfers to Third and Fifth Semesters of FYUGP - Late Application Notification",
    "url": "https://admission.uoc.ac.in/downloads/1788430100_Notifications_Transfer5566.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "College Transfer",
    "date": "03 Sep 2026",
    "is_new": true,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1788393600000
  },
  {
    "id": "doa-43",
    "title": "Press release - B.Ed 2026-27 admission - Online registration extended till 05/09/206 , 11 a.m",
    "url": "https://admission.uoc.ac.in/downloads/1788435648_Press_Release_bedu3782.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "PG/B.Ed Admission",
    "date": "03 Sep 2026",
    "is_new": true,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1788393600000
  },
  {
    "id": "doa-44",
    "title": "2026-27 Late Inter-University Transfers to Third and Fifth Semesters of FYUGP",
    "url": "https://admission.uoc.ac.in/downloads/1788430179_Press_Release_Transfer2984.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "College Transfer",
    "date": "03 Sep 2026",
    "is_new": true,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1788393600000
  },
  {
    "id": "doa-45",
    "title": "Extension of last date of Afsal Ul Ulama Preliminary - Press Release",
    "url": "https://admission.uoc.ac.in/downloads/1788323964_Press_Release_afsal6502.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Press Release",
    "date": "02 Sep 2026",
    "is_new": true,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1788307200000
  },
  {
    "id": "doa-46",
    "title": "Rank list published",
    "url": "https://admission.uoc.ac.in/downloads/1787133199_Press_Release_ug4733.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Press Release",
    "date": "31 Aug 2026",
    "is_new": true,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1788134400000
  },
  {
    "id": "doa-47",
    "title": "Integrated PG in affiliated colleges - Last Date of Admission extended till 11/09/2026",
    "url": "https://admission.uoc.ac.in/downloads/1787562531_Press_Release_IP8362.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Press Release",
    "date": "24 Aug 2026",
    "is_new": true,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1787529600000
  },
  {
    "id": "doa-48",
    "title": "PGCAP 2026 : Last date of admission extended to 11.09.2026",
    "url": "https://admission.uoc.ac.in/downloads/1787387903_Press_Release_pg8142.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "PG/B.Ed Admission",
    "date": "22 Aug 2026",
    "is_new": true,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1787356800000
  },
  {
    "id": "doa-49",
    "title": "BPEd & BPES(Integrated) - Late Registration, Last Date:29.08.2026",
    "url": "https://admission.uoc.ac.in/downloads/1787304448_Press_Release_entrance6139.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Press Release",
    "date": "21 Aug 2026",
    "is_new": true,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1787270400000
  },
  {
    "id": "doa-50",
    "title": "PGDRP - 2026 Entrance Examination",
    "url": "https://admission.uoc.ac.in/downloads/1787138753_Press_Release_PartTimeCourses4771.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Press Release",
    "date": "19 Aug 2026",
    "is_new": true,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1787097600000
  },
  {
    "id": "doa-3",
    "title": "2026 - 27 - Inter-Collegiate Late Application - Notification",
    "url": "https://admission.uoc.ac.in/downloads/1785929756_Notifications_ug6406.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "05 Aug 2026",
    "is_new": true,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1785888000000
  },
  {
    "id": "doa-4",
    "title": "PGDRP 2026: NOTIFICATION",
    "url": "https://admission.uoc.ac.in/downloads/1785822843_Notifications_PartTimeCourses2041.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "04 Aug 2026",
    "is_new": true,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1785801600000
  },
  {
    "id": "doa-5",
    "title": "2026-27 AY - Inter-University Transfers to Third and Fifth Semesters of FYUGP",
    "url": "https://admission.uoc.ac.in/downloads/1784288651_Notifications_ug4764.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "College Transfer",
    "date": "17 Jul 2026",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1784246400000
  },
  {
    "id": "doa-6",
    "title": "2026-27 AY College Transfer - FYUGP Third and Fifth Semesters",
    "url": "https://admission.uoc.ac.in/downloads/1782386764_Notifications_ug6872.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "College Transfer",
    "date": "25 Jun 2026",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1782345600000
  },
  {
    "id": "doa-7",
    "title": "M A Development Studies (To fill the vacancies that arise due to students exiting after the sixth semester of the Integrated MA Development Studies Programme (2023 admission batch))",
    "url": "https://admission.uoc.ac.in/downloads/1782112143_Notifications_entrance9369.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "22 Jun 2026",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1782086400000
  },
  {
    "id": "doa-8",
    "title": "Certificate Course in Professional Dog Training and Canine Forensics 2026 - Batch I - Notification",
    "url": "https://admission.uoc.ac.in/downloads/1781523459_Notifications_PartTimeCourses3378.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "15 Jun 2026",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1781481600000
  },
  {
    "id": "doa-9",
    "title": "Post Graduate Diploma in Digital Media Production (Project Mode) programme - Notification",
    "url": "https://admission.uoc.ac.in/downloads/1780558136_Notifications_PartTimeCourses5693.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "12 Jun 2026",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1781222400000
  },
  {
    "id": "doa-10",
    "title": "M.Ed 2026 : Online Registration - Notification",
    "url": "https://admission.uoc.ac.in/downloads/1781090853_Notifications_medu7906.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "PG/B.Ed Admission",
    "date": "10 Jun 2026",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1781049600000
  },
  {
    "id": "doa-11",
    "title": "FYUGP 2026 - 27 : Online Registration - Notification",
    "url": "https://admission.uoc.ac.in/downloads/1780400855_Notifications_ug1275.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "FYUGP Admission",
    "date": "02 Jun 2026",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1780358400000
  },
  {
    "id": "doa-12",
    "title": "IPCAP 2026 - 27 : Online Registration - Notification",
    "url": "https://admission.uoc.ac.in/downloads/1780400259_Notifications_IP2461.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "02 Jun 2026",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1780358400000
  },
  {
    "id": "doa-13",
    "title": "Afzal - Ul - Ulama (Preliminary) 2026 - 27: Notification",
    "url": "https://admission.uoc.ac.in/downloads/1779795258_Notifications_afsal6472.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "26 May 2026",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1779753600000
  },
  {
    "id": "doa-14",
    "title": "Project Mode Diploma 2026: Online Registration Commenced- Last Date: 02.06.2026",
    "url": "https://admission.uoc.ac.in/downloads/1779535539_Notifications_PartTimeCourses8702.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "23 May 2026",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1779494400000
  },
  {
    "id": "doa-15",
    "title": "PGCAP 2026 : Online Registration - Notification",
    "url": "https://admission.uoc.ac.in/downloads/1779276800_Notifications_pg3751.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "PG/B.Ed Admission",
    "date": "20 May 2026",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1779235200000
  },
  {
    "id": "doa-16",
    "title": "MBA 2026: Notification cum Prospectus",
    "url": "https://admission.uoc.ac.in/downloads/1774433719_Notifications_MBA1654.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "25 Mar 2026",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1774396800000
  },
  {
    "id": "doa-17",
    "title": "CU-CET 2026 Notification",
    "url": "https://admission.uoc.ac.in/downloads/1774265657_Notifications_entrance5721.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "23 Mar 2026",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1774224000000
  },
  {
    "id": "doa-18",
    "title": "Certificate Course in Professional Dog Training and Canine Forensics -Batch II",
    "url": "https://admission.uoc.ac.in/downloads/1773211008_Notifications_PartTimeCourses3526.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "11 Mar 2026",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1773187200000
  },
  {
    "id": "doa-19",
    "title": "Fourth Semester College Transfer - Notification",
    "url": "https://admission.uoc.ac.in/downloads/1768991283_Notifications_ug2336.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "College Transfer",
    "date": "21 Jan 2026",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1768953600000
  },
  {
    "id": "doa-20",
    "title": "Ph.D 2025 - Notification",
    "url": "https://admission.uoc.ac.in/downloads/1765796208_Notifications_PhD4534.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "PhD Admission",
    "date": "15 Dec 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1765756800000
  },
  {
    "id": "doa-21",
    "title": "Notification for admission to Diploma in Digital Media Production, offered in Project Mode - 2025-2026 (II Batch)",
    "url": "https://admission.uoc.ac.in/downloads/1764917691_Notifications_PartTimeCourses5538.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "05 Dec 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1764892800000
  },
  {
    "id": "doa-22",
    "title": "PG Diploma in Translation & Secretarial Practice in Hindi, Certificate Course in Commercial & Spoken Hindi - 2026 -27",
    "url": "https://admission.uoc.ac.in/downloads/1764916613_Notifications_PartTimeCourses5281.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "05 Dec 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1764892800000
  },
  {
    "id": "doa-23",
    "title": "Certificate Course in Professional Dog Training and Canine Forensics Online Registration Commenced -Notification",
    "url": "https://admission.uoc.ac.in/downloads/1761132995_Notifications_PartTimeCourses4148.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "23 Oct 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1761177600000
  },
  {
    "id": "doa-24",
    "title": "ADMISSION NOTIFICATION FOR B.Ed. COMMERCE PROGRAMME 2025-26",
    "url": "https://admission.uoc.ac.in/downloads/1753769784_Notifications_bedu6561.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "PG/B.Ed Admission",
    "date": "29 Jul 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1753747200000
  },
  {
    "id": "doa-25",
    "title": "FYUGP INTER UNIVERSITY TRANSFER NOTIFICATION",
    "url": "https://admission.uoc.ac.in/downloads/1753703461_Notifications_ug5206.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "College Transfer",
    "date": "28 Jul 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1753660800000
  },
  {
    "id": "doa-26",
    "title": "Post Graduate Diploma in Rehabilitation Psychology(PGDRP) : Notification",
    "url": "https://admission.uoc.ac.in/downloads/1751870163_Notifications_PartTimeCourses9088.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "07 Jul 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1751846400000
  },
  {
    "id": "doa-27",
    "title": "INTER COLLEGE MAJOR SWITCHING / COLLEGE TRANSFER WITH EXISTING MAJOR 2025 : Notification",
    "url": "https://admission.uoc.ac.in/downloads/1750851322_Notifications_ug2023.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "College Transfer",
    "date": "25 Jun 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1750809600000
  },
  {
    "id": "doa-28",
    "title": "ADMISSION NOTIFICATION FOR B.Ed. SPECIAL EDUCATION (HEARING IMPAIRED/INTELLECTUAL DISABILITY) 2025-2026",
    "url": "https://admission.uoc.ac.in/downloads/1749210380_Notifications_bedu6057.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "PG/B.Ed Admission",
    "date": "06 Jun 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1749168000000
  },
  {
    "id": "doa-29",
    "title": "B.Ed 2025 - 26 : Notification",
    "url": "https://admission.uoc.ac.in/downloads/1749210218_Notifications_bedu5016.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "PG/B.Ed Admission",
    "date": "06 Jun 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1749168000000
  },
  {
    "id": "doa-30",
    "title": "PGCAP 2025 - 26 : Notification",
    "url": "https://admission.uoc.ac.in/downloads/1749037499_Notifications_pg7685.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "PG/B.Ed Admission",
    "date": "04 Jun 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1748995200000
  },
  {
    "id": "doa-31",
    "title": "IPCAP 2025 : Notification",
    "url": "https://admission.uoc.ac.in/downloads/1748602836_Notifications_IP6726.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "30 May 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1748563200000
  },
  {
    "id": "doa-32",
    "title": "B.Voc 2025 - 26 Under Graduate Programmes : Notification",
    "url": "https://admission.uoc.ac.in/downloads/1748605071_Notifications_ug7088.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "30 May 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1748563200000
  },
  {
    "id": "doa-33",
    "title": "FYUGCAP 2025-26 : Notification",
    "url": "https://admission.uoc.ac.in/downloads/1748424976_Notifications_ug1854.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "FYUGP Admission",
    "date": "28 May 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1748390400000
  },
  {
    "id": "doa-34",
    "title": "Project Mode Diploma/PG Diploma Notification",
    "url": "https://admission.uoc.ac.in/downloads/1748083265_Notifications_PartTimeCourses7634.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "24 May 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1748044800000
  },
  {
    "id": "doa-35",
    "title": "Afzal - Ul - Ulama (Preliminary) 2025 - 26 : Notification",
    "url": "https://admission.uoc.ac.in/downloads/1747888938_Notifications_afsal7547.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "22 May 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1747872000000
  },
  {
    "id": "doa-36",
    "title": "CU-CET 2025 : Notification",
    "url": "https://admission.uoc.ac.in/downloads/1743247472_Notifications_entrance2477.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "29 Mar 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1743206400000
  },
  {
    "id": "doa-37",
    "title": "MBA Registration 2025 : Notification-cum-Prospectus",
    "url": "https://admission.uoc.ac.in/downloads/1743230595_Notifications_MBA7434.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "Admission Notice",
    "date": "29 Mar 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1743206400000
  },
  {
    "id": "doa-38",
    "title": "Ph.D 2024 - Notification",
    "url": "https://admission.uoc.ac.in/downloads/1737700066_Notifications_PhD1429.pdf",
    "category": "admission",
    "category_label": "Directorate of Admission",
    "sub_type": "PhD Admission",
    "date": "24 Jan 2025",
    "is_new": false,
    "source": "Directorate of Admission (DoA)",
    "timestamp": 1737676800000
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

  // 3. Auto-fetch from university sources & media in parallel
  let freshNotices = [];
  try {
    const [cdoeNotices, pareekshaNotices, admissionNotices, mediaNotices] = await Promise.allSettled([
      fetchCdoeNotices(),
      fetchPareekshaNotices(),
      fetchAdmissionNotices(),
      fetchMediaNews()
    ]);

    const cdoeList = cdoeNotices.status === "fulfilled" ? cdoeNotices.value : [];
    const pbList = pareekshaNotices.status === "fulfilled" ? pareekshaNotices.value : [];
    let admList = admissionNotices.status === "fulfilled" ? admissionNotices.value : [];
    let mediaList = mediaNotices.status === "fulfilled" ? mediaNotices.value : [];

    const now = Date.now();
    // Rule 1: Media news strictly 15 days
    mediaList = mediaList.filter(m => (m.timestamp || 0) >= (now - FIFTEEN_DAYS_MS));
    if (mediaList.length < 3) {
      const fallbackMedia = FALLBACK_SEPARATED_NOTICES.filter(n => n.category === "general");
      const existingUrls = new Set(mediaList.map(m => m.url));
      for (const fb of fallbackMedia) {
        if (!existingUrls.has(fb.url) && (fb.timestamp || 0) >= (now - FIFTEEN_DAYS_MS)) {
          mediaList.push(fb);
        }
      }
    }

    // Rule 2: Admission tab strictly 1 month (30 days)
    admList = admList.filter(a => (a.timestamp || 0) >= (now - ONE_MONTH_MS));
    if (admList.length < 3) {
      const fallbackAdm = FALLBACK_SEPARATED_NOTICES.filter(n => n.category === "admission");
      const existingUrls = new Set(admList.map(a => a.url));
      for (const fb of fallbackAdm) {
        if (!existingUrls.has(fb.url)) {
          admList.push(fb);
        }
        if (admList.length >= 7) break;
      }
    }

    freshNotices = [...cdoeList, ...pbList, ...mediaList, ...admList];

    if (freshNotices.length > 0) {
      const payload = {
        last_updated: new Date().toISOString(),
        total: freshNotices.length,
        cdoe_count: freshNotices.filter(n => n.category === "cdoe").length,
        regular_count: freshNotices.filter(n => n.category === "regular").length,
        general_count: freshNotices.filter(n => n.category === "general").length,
        admission_count: freshNotices.filter(n => n.category === "admission").length,
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
    total: FALLBACK_SEPARATED_NOTICES.length,
    cdoe_count: 0,
    regular_count: 0,
    general_count: FALLBACK_SEPARATED_NOTICES.filter(n => n.category === "general").length,
    admission_count: FALLBACK_SEPARATED_NOTICES.filter(n => n.category === "admission").length,
    notices: FALLBACK_SEPARATED_NOTICES
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
  const now = Date.now();

  list = list.filter(n => {
    if (n.category === "general") {
      return (n.timestamp || 0) >= (now - FIFTEEN_DAYS_MS);
    }
    if (n.category === "admission") {
      return (n.timestamp || 0) >= (now - ONE_MONTH_MS);
    }
    return true; // Keep CDOE and Regular intact
  });

  if (categoryFilter && categoryFilter !== "all") {
    list = list.filter(n => (n.category || "").toLowerCase() === categoryFilter);
  }

  const cdoeList = (data.notices || []).filter(n => n.category === "cdoe");
  const regList = (data.notices || []).filter(n => n.category === "regular");
  const genList = (data.notices || []).filter(n => n.category === "general" && (n.timestamp || 0) >= (now - FIFTEEN_DAYS_MS));
  let admList = (data.notices || []).filter(n => n.category === "admission" && (n.timestamp || 0) >= (now - ONE_MONTH_MS));
  if (admList.length < 3) {
    admList = (data.notices || []).filter(n => n.category === "admission").slice(0, 7);
  }

  return new Response(JSON.stringify({
    last_updated: data.last_updated,
    total: list.length,
    cdoe_count: cdoeList.length,
    regular_count: regList.length,
    general_count: genList.length,
    admission_count: admList.length,
    notices: list
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=300",
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
      cf: { cacheTtl: 3600, cacheEverything: true }, signal: AbortSignal.timeout(3500)
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
      cf: { cacheTtl: 3600, cacheEverything: true }, signal: AbortSignal.timeout(3500)
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

// 3. Official Directorate of Admission (DoA) Auto-Fetcher (pages=23 Notifications & pages=21 Press Releases)
async function fetchAdmissionNotices() {
  const notices = [];
  const urls = [
    {"url": "https://admission.uoc.ac.in/admissionnews?pages=23", "sub": "Admission Notice"},
    {"url": "https://admission.uoc.ac.in/admissionnews?pages=21", "sub": "Admission Press Release"}
  ];

  const seen = new Set();
  let id = 1;

  for (const item of urls) {
    try {
      const resp = await fetch(item.url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        },
        cf: { cacheTtl: 3600, cacheEverything: true }, signal: AbortSignal.timeout(3500)
      });
      if (!resp.ok) continue;

      const html = await resp.text();
      const pattern = /<li[^>]*class=["'][^"']*media[^"']*["'][^>]*>([\s\S]*?)<\/li>/gi;
      let m;

      while ((m = pattern.exec(html)) !== null) {
        const liHtml = m[1];
        const aMatch = liHtml.match(/<h[1-6][^>]*>\s*<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/i);
        const smallMatch = liHtml.match(/<small[^>]*>([\s\S]*?)<\/small>/i);

        if (!aMatch) continue;

        let rawHref = aMatch[1].trim();
        let title = aMatch[2].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
        let rawDate = smallMatch ? smallMatch[1].replace(/<[^>]+>/g, "").trim() : "";

        let url = rawHref;
        if (!url.startsWith("http")) {
          url = "https://admission.uoc.ac.in/" + url.replace(/^\//, "");
        }

        const tLower = title.toLowerCase();
        if (title.length < 5 || seen.has(tLower)) continue;
        seen.add(tLower);

        let cleanDate = "Recent";
        let ts = 0;
        let year = "";
        const dm = rawDate.match(/([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})/);
        if (dm) {
          const mStr = dm[1];
          const dStr = dm[2];
          year = dm[3];
          cleanDate = `${dStr} ${mStr} ${year}`;
          const dObj = new Date(`${mStr} ${dStr}, ${year}`);
          if (!isNaN(dObj.getTime())) ts = dObj.getTime();
        }

        if (year && year !== "2026" && year !== "2025") continue;

        let subType = item.sub;
        if (/phd|ph\.d/i.test(tLower)) subType = "PhD Admission";
        else if (/transfer/i.test(tLower)) subType = "College Transfer";
        else if (/fyugp|ugcap/i.test(tLower)) subType = "FYUGP Admission";
        else if (/pgcap|m\.ed|b\.ed|pg/i.test(tLower)) subType = "PG/B.Ed Admission";

        notices.push({
          id: `doa-${id++}`,
          title,
          url,
          category: "admission", // SEPARATE ADMISSION CATEGORY!
          category_label: "Directorate of Admission",
          sub_type: subType,
          date: cleanDate,
          is_new: year === "2026" && /Oct|Sep|Aug/i.test(cleanDate),
          source: "Directorate of Admission (DoA)",
          timestamp: ts
        });
      }
    } catch (e) {
      console.error("fetchAdmissionNotices error:", e);
    }
  }

  return notices;
}

// 4. Outside Media News Auto-Fetcher (Strictly 15 Days for News Tab)
async function fetchMediaNews() {
  const news = [];
  const cutoffTime = Date.now() - FIFTEEN_DAYS_MS;
  const feedUrls = [
    "https://news.google.com/rss/search?q=%22Calicut+University%22+OR+%22University+of+Calicut%22&hl=en-IN&gl=IN&ceid=IN:en",
    "https://news.google.com/rss/search?q=%E0%B4%95%E0%B4%BE%E0%B4%B2%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B5%8D+%E0%B4%B8%E0%B4%B0%E0%B5%8D%E2%80%8D%E0%B4%B5%E0%B4%95%E0%B4%B2%E0%B4%BE%E0%B4%B6%E0%B4%BE%E0%B4%B2&hl=ml&gl=IN&ceid=IN:ml"
  ];

  const seen = new Set();
  let id = 1;

  for (const url of feedUrls) {
    try {
      const resp = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        },
        cf: { cacheTtl: 1800, cacheEverything: true }
      });
      if (!resp.ok) continue;

      const xml = await resp.text();
      const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
      let m;

      while ((m = itemRegex.exec(xml)) !== null) {
        const itemContent = m[1];
        const tMatch = itemContent.match(/<title>([\s\S]*?)<\/title>/i);
        const lMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/i);
        const dMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/i);
        const sMatch = itemContent.match(/<source[^>]*>([\s\S]*?)<\/source>/i);

        if (!tMatch || !lMatch || !dMatch) continue;

        const pubDateStr = dMatch[1].trim();
        const dObj = new Date(pubDateStr);
        if (isNaN(dObj.getTime())) continue;

        const timestamp = dObj.getTime();
        if (timestamp < cutoffTime) continue;

        let title = unescapeXml(tMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim());
        let link = lMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();
        let source = sMatch ? unescapeXml(sMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim()) : "Media";

        if (title.includes(" - ")) {
          const parts = title.split(" - ");
          if (parts.length > 1) {
            const possibleSource = parts.pop().trim();
            title = parts.join(" - ").trim();
            if (!source || source === "Media") source = possibleSource;
          }
        }

        title = title.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
        const simplified = title.toLowerCase().replace(/[^a-z0-9\u0d00-\u0d7f]/g, "");

        if (title.length < 12 || seen.has(simplified)) continue;
        seen.add(simplified);

        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        const dateStr = `${dObj.getDate()} ${months[dObj.getMonth()]} ${dObj.getFullYear()}`;

        let subType = "Media News";
        const tLow = title.toLowerCase();
        if (/പരീക്ഷ|exam|timetable|സെർവർ|തകരാറിലായി|മാറ്റിവെച്ചു|മാറ്റി|result|ഫലം/i.test(tLow)) {
          subType = "Exam & Schedule";
        } else if (/അഡ്മിഷൻ|admission|allotment|അലോട്ട്മെന്റ്|entrance|cutoff/i.test(tLow)) {
          subType = "Admissions";
        } else if (/പ്രതിഷേധ|മാർച്ച്|സിൻഡിക്കേറ്റ്|syndicate|സെനറ്റ്|board|row/i.test(tLow)) {
          subType = "Campus & Syndicate";
        } else if (/സ്പോർട്സ്|sports|കായികം|അവാർഡ്|award/i.test(tLow)) {
          subType = "Sports & Honors";
        }

        news.push({
          id: `media-${id++}`,
          title,
          url: link,
          category: "general", // ONLY MEDIA / GENERAL NEWS
          category_label: "CUC News",
          sub_type: subType,
          date: dateStr,
          is_new: true,
          source: source,
          timestamp: timestamp
        });
      }
    } catch (e) {
      console.error("fetchMediaNews error:", e);
    }
  }

  news.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
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
