# 기여 가이드 (Contributing Guide)

K-FILTER 프로젝트에 기여해주셔서 감사합니다! 🎉

## 📝 버그 제보

버그를 발견하셨나요? [Issues](https://github.com/neramc/k-filter/issues)에 다음 정보와 함께 제보해주세요:

1. **문제가 발생한 사이트 URL**
2. **사용 중인 필터 버전** (Ultimate Global / Ultimate Korean / Relieved)
3. **브라우저 및 버전** (예: Chrome 120, Firefox 121)
4. **증상 설명**
   - 차단되지 않은 광고의 스크린샷
   - 사이트 기능 오류 설명
5. **재현 방법**

## 🚀 새로운 광고 네트워크 추가

새로운 광고 네트워크를 발견하셨나요?

1. Fork this repository
2. 해당 광고 네트워크의 정보 수집:
   - 도메인 주소
   - 트리거 스크립트 URL
   - 광고가 삽입되는 HTML 요소
3. 필터 파일에 추가:
   ```
   ! === 광고 네트워크 이름 ===
   ||domain.com^$important
   ||script.domain.com/ad.js$script
   ##.ad-container-class
   ```
4. Pull Request 생성

## 🔧 필터 규칙 작성 가이드

### 도메인 차단
```
||domain.com^                    # 기본 차단
||domain.com^$important          # 우선순위 높게
||domain.com^$third-party        # 서드파티만
||domain.com/path/*$script       # 특정 경로의 스크립트만
```

### 요소 숨김
```
##.class-name                    # 클래스로 숨김
###id-name                       # ID로 숨김
##[data-ad-unit]                 # 속성으로 숨김
domain.com##.specific-class      # 특정 도메인에만
```

### JS 스크립트 규칙
```javascript
#%#AG_setConstant('object.property', 'noopFunc');
#%#AG_removeElementById('element-id');
```

## 🧪 테스트

변경사항을 제출하기 전에:

1. **여러 사이트에서 테스트**
   - 최소 5개 이상의 한국 사이트
   - 필터가 적용되는 주요 사이트
2. **부작용 확인**
   - 사이트 기능이 정상 작동하는지
   - 로그인, 댓글, 결제 등
3. **브라우저 콘솔 확인**
   - 에러 메시지가 없는지
   - 필터가 제대로 작동하는지

## 📋 Pull Request 체크리스트

- [ ] 변경사항이 특정 버전(Ultimate/Relieved)에 적합한가?
- [ ] 새로운 규칙이 기존 규칙과 충돌하지 않는가?
- [ ] 최소 5개 사이트에서 테스트했는가?
- [ ] 주석을 명확하게 작성했는가?
- [ ] Commit 메시지가 명확한가? (예: "feat: Add XYZ ad network blocking")

## 🎨 Commit 메시지 컨벤션

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 추가
chore: 빌드, 설정 변경
```

예시:
```
feat: Add Outbrain ad network blocking
fix: Fix Naver blog ad container removal
docs: Update installation guide
```

## 🌐 코드 스타일

1. **주석은 한글과 영어 병기**
   ```
   ! === 네이버 광고 / Naver Ads ===
   ```

2. **규칙은 카테고리별로 그룹화**
   ```
   ! Korean Networks
   ! International Networks
   ! Mobile Networks
   ```

3. **중요도 순으로 정렬**
   - important 규칙이 먼저
   - 도메인 차단 다음
   - 요소 숨김은 마지막

## 💬 질문이 있으신가요?

- [Discussions](https://github.com/neramc/k-filter/discussions)에서 질문하세요
- [Issues](https://github.com/neramc/k-filter/issues)에서 버그 제보
- 빠른 응답을 원하시면 "help wanted" 라벨 추가

## 📜 라이선스

기여하신 모든 코드는 [MIT License](LICENSE)를 따릅니다.

---

다시 한번 감사드립니다! ❤️
