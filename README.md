# Portfólio — Rhyan dos Anjos Andrade

> **Backend | DevOps | Infraestrutura**  
> Estética única: fusão da arquitetura romana clássica com tecnologia de infraestrutura moderna.

---

## 🎨 Sobre a Estética

Este portfólio não é apenas um currículo visual — é uma **narrativa visual** que funde dois mundos:

- **Arquitetura Romana Clássica**: arcos triunfais, aquedutos, pedra desgastada pelo tempo, paleta terrosa (ocre, terracota, verde musgo)
- **Infraestrutura Moderna**: terminais Neovim flutuantes holográficos, data streams luminosos, server racks integrados às ruínas, cabos de rede orgânicos

A ideia central: **a engenharia romana construiu para durar milênios; a engenharia de software moderna deve construir com a mesma solidez.** O background parallax com overlay escuro garante legibilidade total enquanto a imagem de fundo conta essa história.

---

## 👨‍💻 Perfil

**Rhyan dos Anjos Andrade**  
Estudante de **Análise e Desenvolvimento de Sistemas (ADS)** na **FATEC Araraquara**  

Foco profissional em **Backend, DevOps e Infraestrutura** — construindo sistemas resilientes, automatizando pipelines e gerenciando ambientes cloud-native.

---

## 🛠 Tecnologias & Ferramentas

*(Stack demonstrada nos terminais flutuantes do background)*

- **Linguagens**: Go, Java, JavaScript/TypeScript
- **Cloud & DevOps**: AWS (ECS, VPC, S3, Builder), Terraform, Docker
- **Infraestrutura**: Linux, Containers, CI/CD, Observabilidade
- **Editor**: Neovim (configuração pessoal nos terminais holográficos)

---

## 🚀 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/Rhyan121121/portfolio.git
cd portfolio

# Sirva com qualquer servidor estático (ex: Python)
python3 -m http.server 8000

# Acesse http://localhost:8000
```

> **Importante**: Abra via `http://localhost` — não abra o `index.html` direto no navegador (`file://`), pois o background parallax e as imagens exigem contexto HTTP para carregar corretamente.

---

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html          # Página principal (raiz)
├── assets/
│   └── img/
│       ├── background.jpg      # Imagem de fundo parallax
│       └── roman_tux.jpg       # Logo Tux romano no header
├── css/
│   └── style.css       # Estilos completos (CSS Variables, Glassmorphism, Animações)
└── js/
    └── script.js       # Lógica: typing effect + floating Neovim windows
```

---

## ✨ Destaques Técnicos

| Feature | Implementação |
|---------|---------------|
| **Background Parallax** | `background-attachment: fixed` + overlay `linear-gradient(rgba(0,0,0,0.7))` |
| **Glassmorphism** | `backdrop-filter: blur(10px)` + `rgba(10,10,10,0.75)` nas seções |
| **Header Glassmorphism** | `backdrop-filter: blur(12px)` + `rgba(26,20,18,0.80)` tom quente |
| **Typing Effect** | JS vanilla, roda uma vez, cursor piscando |
| **Floating Windows** | 4 terminais Neovim com código Go/AWS/Terraform/Docker, animação CSS `rw-float` |
| **Hover States** | Escala + `drop-shadow` na logo; elevação + cor `--accent` nos botões |
| **Responsivo** | Mobile-first, `flex-wrap`, breakpoints 900px/640px/480px |

---

## 📬 Contato

| Plataforma | Link |
|------------|------|
| **GitHub** | [github.com/Rhyan121121](https://github.com/Rhyan121121) |
| **LinkedIn** | [linkedin.com/in/rhyan-dos-anjos-andrade](https://www.linkedin.com/in/rhyan-dos-anjos-andrade/) |
| **E-mail** | [rhyanaa1211@gmail.com](mailto:rhyanaa1211@gmail.com) |
| **AWS Builder** | [builder.aws.com/community/@rhyan121121](https://builder.aws.com/community/@rhyan121121?tab=badges) |

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para estudar, adaptar e usar como base para seu próprio portfólio.

---

*Construído com a mesma filosofia das ruínas romanas: código limpo, estrutura sólida, feito para durar.*