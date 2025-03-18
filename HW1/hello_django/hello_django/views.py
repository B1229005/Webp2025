from django.http import JsonResponse

def courselist(request):
    courses = [
        {"開課單位": "資工系", "課程名稱": "物件導向軟體設計", "授課教師": "黃崇源"},
        {"開課單位": "資工系", "課程名稱": "計算機網路實驗", "授課教師": "李春良"},
        {"開課單位": "資工系", "課程名稱": "作業系統實務", "授課教師": "張哲維"},
        {"開課單位": "資工系", "課程名稱": "生物統計", "授課教師": "陳光武"},
    ]
    return JsonResponse({"courses": courses})

