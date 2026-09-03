(function() {
  const nameEl = document.getElementById('hero-name');
  if (!nameEl) return;

  const fullName = 'Rhyan Dos Anjos Andrade';
  let nameIndex = 0;
  const nameTypingSpeed = 35;
  const startDelay = 800;

  nameEl.style.minWidth = '1ch';
  nameEl.style.width = 'auto';

  function typeName() {
    if (nameIndex < fullName.length) {
      const partial = fullName.slice(0, nameIndex + 1);
      
      nameEl.innerHTML =
        escapeHtmlName(partial) +
        '<span class="typing-cursor-name" aria-hidden="true"></span>';
      
      nameIndex++;
      setTimeout(typeName, nameTypingSpeed);
    } else {
      nameEl.innerHTML = escapeHtmlName(fullName);
      
      nameEl.style.width = 'max-content';
      nameEl.style.maxWidth = '100%';
      nameEl.style.overflow = 'visible';
      nameEl.style.whiteSpace = 'nowrap';
    }
  }

  function escapeHtmlName(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  setTimeout(typeName, startDelay);
})();

(function() {
  const windowsContainer = document.getElementById('ruins-windows');
  if (!windowsContainer) return;

  const snippets = [
    {
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

  snippets.forEach(s => {
    const win = document.createElement('div');
    win.className = 'holo-window' + (s.important ? ' hw-important' : '');
    
    win.style.setProperty('--rw-rot', s.rot);
    win.style.setProperty('--rw-dur', s.dur);
    win.style.setProperty('--rw-delay', s.delay);
    win.style.top = s.top;
    
    if (s.left) {
      win.style.left = s.left;
      win.style.right = 'auto';
    } else if (s.right) {
      win.style.right = s.right;
      win.style.left = 'auto';
    }

    let html = '<div class="hw-bar"><span class="hw-dot"></span><span class="hw-dot"></span><span class="hw-dot"></span></div>';
    
    s.code.forEach(line => {
      if (line[0] === '' && line.length === 1) {
        html += '<div>&nbsp;</div>';
        return;
      }
      
      let rendered = '';
      for (let i = 0; i < line.length; i++) {
        if (typeof line[i] !== 'string') continue;
        if (line[i].startsWith('hw-')) continue;
        
        const prev = i > 0 ? line[i - 1] : '';
        const cls = prev.startsWith('hw-') ? ' class="' + prev + '"' : '';
        
        rendered += '<span' + cls + '>' + line[i].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span>';
      }
      
      html += '<div>' + (rendered || '&nbsp;') + '</div>';
    });
    
    win.innerHTML = html;
    windowsContainer.appendChild(win);
  });
})();