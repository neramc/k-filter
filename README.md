# K-FILTER

<div align="center">
  <img src="https://i.ibb.co/Qv2D12pZ/33.png" alt="K-FILTER Logo" />
  
  <h3>한국 + 해외 광고 완벽 차단 필터</h3>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![GitHub release](https://img.shields.io/github/v/release/neramc/k-filter)](https://github.com/neramc/k-filter/releases)
  [![GitHub stars](https://img.shields.io/github/stars/neramc/k-filter)](https://github.com/neramc/k-filter/stargazers)
</div>

---

## 📦 버전 선택

### 🔥 K-FILTER Ultra (v5.0.0) - 최강 추천!
**44개 광고 네트워크 차단** (한국 14개 + 해외 30개)

```
https://cdn.jsdelivr.net/gh/neramc/k-filter@latest/filter_ultra.txt
```

**SHA-256**: `8e8568fa2fb2090bcdd48b6228b900953b322626448589ced06d66668f369189`

**특징:**
- ✅ 한국 + 해외 모든 주요 광고 네트워크
- ✅ Anti-Adblock 무력화 (FuckAdBlock, BlockAdBlock)
- ✅ Shadow DOM 광고 차단
- ✅ 동적 스크립트 삽입 차단
- ✅ 미끼 광고(Bait ad) 제거
- ✅ **788줄**의 강력한 규칙

**추천 대상:** 광고를 완벽하게 차단하고 싶은 사용자

---

### 🇰🇷 K-FILTER Base (v3.0.1)
**한국 사이트 최적화 + 주요 광고 네트워크 차단**

```
https://cdn.jsdelivr.net/gh/neramc/k-filter@latest/filter_base.txt
```

**SHA-256**: `ba89d834717cc11a2ef0e31153cb1e176042975cf58c80837f6bbb37da23d47d`

**특징:**
- ✅ 한국 주요 광고 네트워크 완벽 차단
- ✅ 네이버, 카카오, 다음, 디시인사이드 등 사이트별 최적화
- ✅ **858줄**의 세밀한 규칙
- ✅ 한국 사이트 위주 사용자에게 최적

**추천 대상:** 한국 사이트를 주로 이용하는 사용자

---

### 🌿 K-FILTER Relieved (v4.0.0)
**핵심 광고만 차단 (사이트 호환성 우선)**

```
https://cdn.jsdelivr.net/gh/neramc/k-filter@latest/filter_relieved.txt
```

**SHA-256**: `3a107d502c4fcd3a440fa1cd2f1bf08c13bf91d6f4d593b4db94a26ff23777ab`

**특징:**
- ✅ 안정적인 사이트 작동
- ✅ 필수 광고만 차단 (**183줄**)
- ✅ 가벼운 로딩
- ⚠️ 일부 광고 표시 가능

**추천 대상:** 사이트 호환성이 최우선인 사용자

---

## 🚀 설치 방법

### 방법 1: uBlock Origin (추천)

1. [uBlock Origin](https://ublockorigin.com/) 설치
2. 확장 프로그램 설정 열기
3. **필터 목록** → **가져오기** 클릭
4. 위의 URL 중 하나를 붙여넣기
5. **적용** 클릭

### 방법 2: AdGuard

1. [AdGuard](https://adguard.com/) 설치
2. 설정 → **필터** → **사용자 규칙**
3. 위의 URL 추가

### 방법 3: Adblock Plus

1. [Adblock Plus](https://adblockplus.org/) 설치
2. 설정 → **고급** → **나만의 필터**
3. "+ 새 필터 목록 추가" 클릭
4. 위의 URL 입력

### 방법 4: Tampermonkey/Greasemonkey (유저스크립트)

1. [Tampermonkey](https://www.tampermonkey.net/) 설치
2. [K-FILTER 유저스크립트 설치](https://cdn.jsdelivr.net/gh/neramc/k-filter@main/k-filter.user.js)
3. 자동으로 모든 사이트에 적용

---

## 📊 버전 비교표

| 기능 | Ultra | Base | Relieved |
|------|-------|------|----------|
| **줄 수** | 788줄 | 858줄 | 183줄 |
| **버전** | v5.0.0 | v3.0.1 | v4.0.0 |
| **한국 광고 네트워크** | ✅ 14개 | ✅ 14개 | ✅ 8개 |
| **해외 광고 네트워크** | ✅ 30개 | ❌ | ❌ |
| **사이트별 최적화** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| **Anti-Adblock** | ✅ 강력 | ✅ 보통 | ❌ |
| **Shadow DOM 차단** | ✅ | ✅ | ❌ |
| **동적 스크립트 차단** | ✅ | ✅ | ❌ |
| **사이트 호환성** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **업데이트 주기** | 1일 | 2일 | 3일 |

---

## 🎯 차단 대상

### 한국 광고 네트워크 (모든 버전)
- Google Ads, 네이버 광고, 카카오 애드핏
- 모비온, 데이블, 타블라, 클릭몬
- 버즈빌, 크리테오, 쿠팡 파트너스
- 애드믹서, 카울리, 당근광고, 리얼클릭

### 해외 광고 네트워크 (Ultra만 해당)
- Facebook Ads, Amazon Ads
- AppNexus, Outbrain, Media.net
- AdRoll, OpenX, PubMatic
- PropellerAds, Adsterra, PopAds
- Revcontent, MGID, Mediavine, Ezoic
- 그 외 30개 이상

---

## 📝 적용 사이트

### 한국 (모든 버전)
- **포털**: 네이버, 다음, 네이트
- **커뮤니티**: 디시인사이드, 클리앙, 펨코, 미코, 에브리타임
- **블로그**: Tistory, 네이버 블로그
- **쇼핑**: 쿠팡, 다나와, 네이버쇼핑
- **기타**: 트위터, 픽시브, 나무위키

### 해외 (Ultra만 해당)
- 뉴스 사이트, 블로그
- 유튜브 외부 광고
- 소셜미디어 광고
- 쇼핑몰, 게임 사이트

---

## ⚠️ 문제 해결

### 사이트가 제대로 작동하지 않아요
1. **Relieved Edition**으로 변경
2. 또는 **Base Edition** 사용
3. 또는 해당 사이트만 필터 비활성화

### 광고가 여전히 보여요
1. **Ultra Edition** 사용
2. 필터 목록 강제 업데이트
3. 브라우저 캐시 삭제

### 광고 차단 경고가 떠요
1. **Ultra Edition** 사용 (Anti-Adblock 무력화 포함)
2. 유저스크립트 추가 설치

### 어떤 버전을 선택해야 하나요?

```
💪 완벽한 광고 차단 원함 → Ultra Edition (788줄)
🇰🇷 한국 사이트 주로 사용 → Base Edition (858줄)
🌿 사이트 호환성 최우선 → Relieved Edition (183줄)
```

---

## 🔄 업데이트

필터는 **자동 업데이트**됩니다:
- **Ultra**: 매일
- **Base**: 2일마다
- **Relieved**: 3일마다

수동 업데이트: 필터 설정에서 "지금 업데이트" 클릭

---

## 🔐 SHA-256 해시 검증

필터의 무결성을 확인하려면 SHA-256 해시를 비교하세요:

```bash
# Ultra (788줄)
8e8568fa2fb2090bcdd48b6228b900953b322626448589ced06d66668f369189

# Base (858줄)
ba89d834717cc11a2ef0e31153cb1e176042975cf58c80837f6bbb37da23d47d

# Relieved (183줄)
3a107d502c4fcd3a440fa1cd2f1bf08c13bf91d6f4d593b4db94a26ff23777ab
```

---

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

---

## 🙏 기여

버그 제보 및 기능 제안은 [Issues](https://github.com/neramc/k-filter/issues)에 올려주세요!

자세한 기여 가이드는 [CONTRIBUTING.md](CONTRIBUTING.md)를 참조하세요.

---

## 📞 지원

- **버그 제보**: [Issues](https://github.com/neramc/k-filter/issues)
- **질문 & 토론**: [Discussions](https://github.com/neramc/k-filter/discussions)
- **기여**: [Pull Requests](https://github.com/neramc/k-filter/pulls)

---

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=neramc/k-filter&type=Date)](https://star-history.com/#neramc/k-filter&Date)

---

<div align="center">
  
  **최종 업데이트**: 2026-02-13 21:55 KST
  
  Made with ❤️ by <a href="https://github.com/neramc">neramc</a>
  
</div>

> [!NOTE]
> *해당 프로젝트는 _자료수집_과 _반복코드 작성_부분에서 **Claude** 의 도움을 받았습니다.*

