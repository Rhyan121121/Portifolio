// ========================================================================
// EFEITO DE DIGITAÇÃO DO NOME (Executado apenas uma vez)
// Renderiza o nome completo no elemento #hero-name sem as chaves { }
// ========================================================================
(function() {
  // Captura o elemento <h1> do Hero pelo identificador único no DOM
  const nameEl = document.getElementById('hero-name');
  
  // Interrompe a execução caso o elemento não exista para evitar erros
  if (!nameEl) return;

  // Nome oficial para o efeito de digitação contínua
  const fullName = 'Rhyan Dos Anjos Andrade';
  
  // Índice do caractere atual sendo renderizado
  let nameIndex = 0;
  
  // Intervalo de digitação: 35ms por caractere (~28 caracteres por segundo)
  const nameTypingSpeed = 35;
  
  // Atraso inicial de 800ms para permitir o carregamento das fontes
  const startDelay = 800;

  // Define largura mínima dinâmica para evitar quebra de linha prematura
  nameEl.style.minWidth = '1ch';
  nameEl.style.width = 'auto';

  // Função recursiva responsável por fatiar e renderizar os caracteres
  function typeName() {
    // Processa os caracteres enquanto não alcançar o fim da string
    if (nameIndex < fullName.length) {
      // Extrai o fragmento acumulado da string
      const partial = fullName.slice(0, nameIndex + 1);
      
      // Renderiza o texto acompanhado do cursor animado
      nameEl.innerHTML =
        escapeHtmlName(partial) +
        '<span class="typing-cursor-name" aria-hidden="true"></span>';
      
      // Incrementa para o próximo caractere
      nameIndex++;
      
      // Agenda a próxima iteração respeitando o tempo configurado
      setTimeout(typeName, nameTypingSpeed);
    } else {
      // Consolida o nome definitivo e desativa o cursor ao final
      nameEl.innerHTML = escapeHtmlName(fullName);
      
      // Garante que o container mantenha o tamanho exato do texto
      nameEl.style.width = 'max-content';
      nameEl.style.maxWidth = '100%';
      nameEl.style.overflow = 'visible';
      nameEl.style.whiteSpace = 'nowrap';
    }
  }

  // Função para sanitização de entidades HTML e prevenção de injeção
  function escapeHtmlName(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // Agenda o início da digitação após o atraso configurado
  setTimeout(typeName, startDelay);
})();

// ========================================================================
// TERMINAIS FLUTUANTES HOLOGRÁFICOS (Background)
// Snippets técnicos de backend e DevOps fixados nas bordas da tela
// ========================================================================
(function() {
  // Captura o contêiner raiz onde as janelas serão inseridas
  const windowsContainer = document.getElementById('ruins-windows');
  
  // Se o elemento não existir, interrompe o script
  if (!windowsContainer) return;

  // Dados com coordenadas, tempos e conteúdo de cada janela
  const snippets = [
    {
      // Janela 1: Canto Superior Esquerdo (Servidor API em Go)
      top: '12%',
      left: '1.2%',
      rot: '-3deg',
      dur: '6s',
      delay: '0s',
      important: false,
      code: [
        ['hw-com', '// main.go — API server'],
        ['hw-kw', 'package ', 'hw-type', 'main', ''],
        [''],
        ['hw-kw', 'import ', 'hw-str', `"net/http"`],
        ['hw-kw', 'import ', 'hw-str', `"github.com/aws/aws-sdk-go-v2"`],
        [''],
        ['hw-kw', 'func ', 'hw-fn', 'handler', '(', 'hw-type', 'w http.ResponseWriter, r *http.Request) {'],
        ['  ', 'hw-type', 'cfg', ',', ' ', 'hw-type', 'err', ' ', ':=', ' ', 'hw-fn', 'loadConfig', '()'],
        ['  ', 'hw-kw', 'if ', 'err', ' ', '!= ', 'hw-str', 'nil', ' ', '{ ', 'hw-fn', 'httpError', '(', 'w, ', 'hw-str', '"config"', '); ', 'hw-kw', 'return }'],
        ['  ', 'hw-type', 's3', ' ', ':=', ' ', 'hw-fn', 's3.NewFromConfig', '(', 'cfg)'],
        ['  ', 'hw-fn', 'json.NewEncoder', '(', 'w).', 'hw-fn', 'Encode', '(', 's3)'],
        ['}'],
      ],
    },
    {
      // Janela 2: Canto Superior Direito (Infraestrutura com Terraform)
      top: '12%',
      right: '1.2%',
      rot: '3deg',
      dur: '7s',
      delay: '1s',
      important: false,
      code: [
        ['hw-com', '# aws-terraform.tf'],
        [''],
        ['hw-kw', 'resource ', 'hw-str', '"aws_vpc"', ' ', 'hw-str', '"main" ', '{'],
        ['  ', 'hw-line', 'cidr_block          = ', 'hw-str', '"10.0.0.0/16"'],
        ['  ', 'hw-line', 'enable_dns_support  = ', 'hw-kw', 'true'],
        ['  ', 'hw-line', 'enable_dns_hostnames= ', 'hw-kw', 'true'],
        ['}'],
        [''],
        ['hw-kw', 'resource ', 'hw-str', '"aws_ecs_cluster"', ' ', 'hw-str', '"api" ', '{'],
        ['  ', 'hw-line', 'name = ', 'hw-str', '"production-cluster"'],
        ['  ', 'hw-line', 'setting { name = ', 'hw-str', '"containerInsights" value = ', 'hw-str', '"enabled" }'],
        ['}'],
      ],
    },
    {
      // Janela 3: Meia Altura Esquerda (Pipeline de build em Go)
      top: '52%',
      left: '1.2%',
      rot: '-2deg',
      dur: '8s',
      delay: '2s',
      important: true,
      code: [
        ['hw-com', '// pipeline.go'],
        [''],
        ['hw-kw', 'func ', 'hw-fn', 'deployPipeline', '(', 'hw-type', 'ctx ', 'hw-type', 'context.Context) ', 'hw-type', 'error {'],
        ['  ', 'hw-kw', 'select ', '{'],
        ['  ', 'hw-kw', 'case ', '<-', 'hw-fn', 'ctx.Done', '():'],
        ['    ', 'hw-kw', 'return ', 'hw-type', 'ctx.Err', '()'],
        ['  }'],
        ['}'],
      ],
    },
    {
      // Janela 4: Meia Altura Direita (Dockerfile multi-stage)
      top: '52%',
      right: '1.2%',
      rot: '3deg',
      dur: '6.5s',
      delay: '0.5s',
      important: false,
      code: [
        ['hw-com', '// Dockerfile'],
        [''],
        ['hw-kw', 'FROM ', 'hw-str', 'golang:1.22-alpine ', 'hw-kw', 'AS ', 'hw-type', 'builder'],
        ['hw-kw', 'WORKDIR ', 'hw-str', '/app'],
        ['hw-kw', 'COPY ', 'hw-str', 'go.mod ./'],
        ['hw-kw', 'RUN ', 'hw-fn', 'go mod download'],
        ['hw-kw', 'CMD ', '[', 'hw-str', '"/server"', ']'],
      ],
    },
  ];

  // Cria e renderiza cada uma das janelas holográficas
  snippets.forEach(s => {
    // Cria o nó principal da janela
    const win = document.createElement('div');
    win.className = 'holo-window' + (s.important ? ' hw-important' : '');
    
    // Injeta as propriedades customizadas para a animação CSS
    win.style.setProperty('--rw-rot', s.rot);
    win.style.setProperty('--rw-dur', s.dur);
    win.style.setProperty('--rw-delay', s.delay);
    win.style.top = s.top;
    
    // Ancoragem horizontal nas laterais
    if (s.left) {
      win.style.left = s.left;
      win.style.right = 'auto';
    } else if (s.right) {
      win.style.right = s.right;
      win.style.left = 'auto';
    }

    // Monta o cabeçalho simulando a janela do sistema operacional
    let html = '<div class="hw-bar"><span class="hw-dot"></span><span class="hw-dot"></span><span class="hw-dot"></span></div>';
    
    // Itera pelas linhas do código aplicando a sintaxe colorida
    s.code.forEach(line => {
      // Linhas em branco
      if (line[0] === '' && line.length === 1) {
        html += '<div>&nbsp;</div>';
        return;
      }
      
      let rendered = '';
      for (let i = 0; i < line.length; i++) {
        // Ignora tokens que não sejam strings
        if (typeof line[i] !== 'string') continue;
        // Pula nomes de classe prefixados com 'hw-'
        if (line[i].startsWith('hw-')) continue;
        
        // Aplica a classe correspondente ao token anterior
        const prev = i > 0 ? line[i - 1] : '';
        const cls = prev.startsWith('hw-') ? ' class="' + prev + '"' : '';
        
        // Concatena o texto formatado e sanitizado
        rendered += '<span' + cls + '>' + line[i].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span>';
      }
      
      html += '<div>' + (rendered || '&nbsp;') + '</div>';
    });
    
    // Insere o HTML montado e anexa a janela ao container
    win.innerHTML = html;
    windowsContainer.appendChild(win);
  });
})();