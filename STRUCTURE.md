# K-FILTER Repository Structure

```
k-filter/
├── .github/
│   └── workflows/
│       └── update-manifest.yml      # Auto-update manifest on filter changes
│
├── filter_ultra.txt                 # Ultra Edition (788 lines, v5.0.0)
├── filter_base.txt                  # Base Edition (858 lines, v3.0.1)
├── filter_relieved.txt              # Relieved Edition (183 lines, v4.0.0)
│
├── k-filter.user.js                 # Tampermonkey/Greasemonkey userscript
├── manifest.json                    # Filter metadata with versions and hashes
│
├── README.md                        # Main documentation
├── CONTRIBUTING.md                  # Contribution guide
├── LICENSE                          # MIT License
├── .gitignore                       # Git ignore rules
└── STRUCTURE.md                     # This file
```

## 📁 File Descriptions

### Filter Files (.txt)

#### `filter_ultra.txt`
- **Version**: 5.0.0
- **Lines**: 788
- **Description**: 한국 + 해외 44개 광고 네트워크 차단
- **Features**: Anti-Adblock bypass, Shadow DOM blocking, Bait ad removal, Dynamic script blocking
- **Use Case**: 완벽한 광고 차단을 원하는 사용자
- **Update Cycle**: 매일
- **jsDelivr URL**: `https://cdn.jsdelivr.net/gh/neramc/k-filter@main/filter_ultra.txt`
- **SHA-256**: `8e8568fa2fb2090bcdd48b6228b900953b322626448589ced06d66668f369189`

#### `filter_base.txt`
- **Version**: 3.0.1
- **Lines**: 858
- **Description**: 한국 광고 네트워크 + 사이트별 최적화
- **Features**: 네이버, 카카오, 디시인사이드 등 한국 주요 사이트 최적화
- **Use Case**: 한국 사이트 위주 사용자
- **Update Cycle**: 2일
- **jsDelivr URL**: `https://cdn.jsdelivr.net/gh/neramc/k-filter@main/filter_base.txt`
- **SHA-256**: `ba89d834717cc11a2ef0e31153cb1e176042975cf58c80837f6bbb37da23d47d`

#### `filter_relieved.txt`
- **Version**: 4.0.0
- **Lines**: 183
- **Description**: 핵심 광고만 차단
- **Features**: 안정적인 사이트 호환성
- **Use Case**: 사이트 기능 보존이 중요한 사용자
- **Update Cycle**: 3일
- **jsDelivr URL**: `https://cdn.jsdelivr.net/gh/neramc/k-filter@main/filter_relieved.txt`
- **SHA-256**: `3a107d502c4fcd3a440fa1cd2f1bf08c13bf91d6f4d593b4db94a26ff23777ab`

### Scripts & Configuration

#### `k-filter.user.js`
- **Type**: Tampermonkey/Greasemonkey userscript
- **Version**: 5.0.0
- **Description**: 필터를 적용하는 JavaScript 유저스크립트
- **Features**:
  - Global ad object neutralization
  - Dynamic script injection blocking
  - Shadow DOM ad blocking
  - MutationObserver for real-time blocking
- **Installation**: Tampermonkey에서 직접 설치 가능
- **URL**: `https://cdn.jsdelivr.net/gh/neramc/k-filter@main/k-filter.user.js`

#### `manifest.json`
- **Type**: Metadata file
- **Purpose**: 필터 버전, 해시, 업데이트 정보 관리
- **Auto-updated**: GitHub Actions를 통해 자동 업데이트
- **Contains**:
  - Filter versions
  - SHA-256 hashes
  - Line counts
  - Update timestamps (KST)
  - Commit information
  - jsDelivr URLs

### GitHub Actions

#### `.github/workflows/update-manifest.yml`
- **Trigger**: `.txt` 파일 변경 시 자동 실행
- **Actions**:
  1. 변경된 필터 파일 감지
  2. 커밋 정보 추출 (제목, 메시지, 날짜)
  3. SHA-256 해시 계산
  4. 줄 수 계산
  5. 버전 번호 자동 증가
  6. manifest.json 업데이트
  7. 자동 커밋 & 푸시
- **Timezone**: Asia/Seoul (KST)

### Documentation

#### `README.md`
- Main project documentation
- Installation guides
- Version comparison
- Troubleshooting

#### `CONTRIBUTING.md`
- Contribution guidelines
- Bug report template
- Pull request checklist
- Coding style guide

#### `LICENSE`
- MIT License
- Free to use, modify, distribute

## 🔄 Update Workflow

1. **Developer updates filter file** (e.g., `filter_ultra.txt`)
2. **Commit & push to main branch**
3. **GitHub Actions triggered**
   - Detects changed `.txt` files
   - Extracts commit info
   - Calculates SHA-256 hash
   - Counts lines
   - Increments version number
   - Updates `manifest.json`
4. **jsDelivr CDN automatically updates**
5. **Users receive update** (via uBlock Origin, AdGuard, etc.)

## 🌐 CDN Usage

All filter files are available via jsDelivr CDN:

```
https://cdn.jsdelivr.net/gh/neramc/k-filter@main/<filename>
```

### Latest Version
```
https://cdn.jsdelivr.net/gh/neramc/k-filter@latest/<filename>
```

### Specific Version
```
https://cdn.jsdelivr.net/gh/neramc/k-filter@v5.0.0/<filename>
```

## 📊 Version Management

- **Major version (X.0.0)**: 구조적 변경, 호환성 깨짐
- **Minor version (5.X.0)**: 새로운 기능, 광고 네트워크 추가
- **Patch version (5.0.X)**: 버그 수정, 규칙 개선

GitHub Actions가 자동으로 patch 버전을 증가시킵니다.

## 📈 Filter Statistics

| Filter | Lines | Version | Networks | Update Cycle |
|--------|-------|---------|----------|--------------|
| Ultra | 788 | v5.0.0 | 44 (KR 14 + Global 30) | 1 day |
| Base | 858 | v3.0.1 | 14 (Korean only) | 2 days |
| Relieved | 183 | v4.0.0 | 8 (Core only) | 3 days |

## 🔐 Security

- **SHA-256 hashes**: 필터 무결성 검증
- **Automatic updates**: 신뢰할 수 있는 소스에서만
- **MIT License**: 투명한 오픈소스

## 📞 Support

- **Issues**: Bug reports, feature requests
- **Discussions**: Questions, ideas
- **Pull Requests**: Code contributions

---

Last updated: 2026-02-13 21:55 KST
