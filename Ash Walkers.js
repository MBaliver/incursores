var storyContent = ﻿{"inkVersion":19,"root":[["ev","str","^Começar","/str","/ev",{"*":"0.c-0","flg":20},{"c-0":["^ ",{"->":"ficha1"},"\n",{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"ficha1":["^Você é um andarilho das cinzas, um mercenário em um mundo pós-apocalíptico. Agora, vamos montar a sua ficha para começar o jogo, tudo bem? Vamos começar rolando alguns dados para definirmos os seus atributos. ",{"->":"ficha2"},"\n",{"#f":1}],"ficha2":[["ev","str","^Rolar dados","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","ev",1,6,"rnd","/ev",{"VAR=":"dado1","re":true},"\n","^Você tirou ","ev",{"VAR?":"dado1"},"out","/ev","^ no dado de força!","\n","ev",{"VAR?":"dado1"},"/ev",{"VAR=":"forca","re":true},"ev",1,6,"rnd","/ev",{"VAR=":"dado2","re":true},"\n","^Você tirou ","ev",{"VAR?":"dado2"},"out","/ev","^ no dado de agilidade!","\n","ev",{"VAR?":"dado2"},"/ev",{"VAR=":"agilidade","re":true},"ev",1,6,"rnd","/ev",{"VAR=":"dado3","re":true},"\n","ev",{"VAR?":"dado3"},"/ev",{"VAR=":"inteligencia","re":true},"^Você tirou ","ev",{"VAR?":"dado3"},"out","/ev","^ no dado de inteligencia!","\n","ev",{"VAR?":"forca"},{"VAR?":"inteligencia"},"+",{"VAR?":"agilidade"},"+","/ev",{"VAR=":"vida","re":true},"^Você tem ","ev",{"VAR?":"vida"},"out","/ev","^ pontos de vida. ",{"->":"ficha3"},"\n",{"#f":5}]}],{"#f":1}],"ficha3":[["ev","str","^Rolar outra vez","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Estou satisfeito, vamos começar!","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","ev",1,6,"rnd","/ev",{"VAR=":"dado1","re":true},"\n","^Você tirou ","ev",{"VAR?":"dado1"},"out","/ev","^ no dado de força!","\n","ev",{"VAR?":"dado1"},"/ev",{"VAR=":"forca","re":true},"ev",1,6,"rnd","/ev",{"VAR=":"dado2","re":true},"\n","^Você tirou ","ev",{"VAR?":"dado2"},"out","/ev","^ no dado de agilidade!","\n","ev",{"VAR?":"dado2"},"/ev",{"VAR=":"agilidade","re":true},"ev",1,6,"rnd","/ev",{"VAR=":"dado3","re":true},"\n","ev",{"VAR?":"dado3"},"/ev",{"VAR=":"inteligencia","re":true},"^Você tirou ","ev",{"VAR?":"dado3"},"out","/ev","^ no dado de inteligencia!","\n","ev",{"VAR?":"forca"},{"VAR?":"inteligencia"},"+",{"VAR?":"agilidade"},"+","/ev",{"VAR=":"vida","re":true},"^Você tem ","ev",{"VAR?":"vida"},"out","/ev","^ pontos de vida. ",{"->":"ficha3"},"\n",{"#f":5}],"c-1":["^ ",{"->":"intro"},"\n",{"#f":5}]}],{"#f":1}],"intro":[["^Algum lugar do Egito.","\n","^Fim do verão.","\n","^Outra vez você se vê perdido em seus pensamentos. Como foi que você acabou em uma situação dessas? Tudo bem, você precisava do dinheiro(e quem não precisa hoje em dia?) mas essa incursão parece mais estranha que o normal. Podia ser pior, você pensa. Imagina cruzar todo esse deserto sem um camelo? Mesmo assim, nem todo o cansaço do mundo te faria ignorar o trote do animal tentando manter o equilíbrio enquanto seu grupo atravessa o que sobrou das estradas.","\n","^Nem toda a areia do mundo conseguiria, entretanto, esconder os restos do prédios que outrora faziam daquela uma das cidades mais belas do velho mundo. Os edíficios gigantes, disformes e retorcidos, verdadeiros gigantes de concreto e aço que assombram o vale desértico que há muito tempo foi uma cidade próspera. Você sente o deserto vivo, as dunas engolindo os restos da nossa história e a escuridão cercando sua pequena caravana.","\n","ev","str","^Continuar","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Ahmed lidera a expedição , com seus 40 e poucos anos, cujo mais da metade foram dedicados ao serviço militar. Sua pele é cor de bronze, seu rosto quadrado e castigado com um nariz proeminente. Provavelmente a única pessoa viva em um raio de 100kms que saberia se orientar em um lugar tão inóspito quanto aquele.","\n","^Logo atrás vem a doutora Susana Ashford, sua mecena nessa missão e atual líder da célula local da Frente Sobrevivente. A doutora é diferente do que você tinha em mente quando ela entrou em contato há algumas semanas. A única coisa que entrega sua idade avançada são os cabelos cor de prata que adornam sua pele de mármore e os olhos azuis.","\n","^Tentando acompanhar o galope do seu camelo está a pessoa mais mundana dessa operação, Samuel Klein, especialista em retrotecnologia e criptografias. Na faixa dos 30, seus cabelos castanhos mal cuidados e o olhar perdido te trazem a certeza de que ele é a pessoa ideal para esse trabalho.","\n","ev","str","^Continuar","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["^Parando de analisar seus colegas para esse trabalho, você repara onde está: os restos de alguma avenida importante tomada pelo deserto, os letreiros luminosos que nunca voltariam a acender e a constante luta entre os restos de uma cidade que não quer ser apagada com as areias do deserto que tudo consomem. Pensar essas coisas te trás uma sensação estranha, uma sensação de...","\n","ev","str","^desespero.","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^calma.","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^tristeza.","/str","/ev",{"*":".^.c-4","flg":20},{"c-2":["^ — Desespero. — Você deixa escapar.","\n","^É como se o vazio da cidade te sufocasse.","\n",{"->":".^.^.^.g-2"},{"#f":5}],"c-3":["^ — Calma. — Você fala em voz alta.","\n","^Em outros tempos, aquelas ruas nunca seriam tão silenciosas.","\n",{"->":".^.^.^.g-2"},{"#f":5}],"c-4":["^ — Tristeza. — Você repete para si mesmo.","\n","^Você não consegue parar de pensar em tudo o que aconteceu ali.","\n",{"->":".^.^.^.g-2"},{"#f":5}],"#f":5}],"g-2":["^Daniel percebe o início do seu monólogo e se aproxima de você e seu camelo. — Eu acho que sei como você se sente. — Ele tenta confortá-lo. — Você já esteve em algum lugar como esse? —","\n","ev","str","^Não, não assim.","/str","/ev",{"*":".^.c-5","flg":20},"ev","str","^Eu sempre achei que as pessoas exageravam...","/str","/ev",{"*":".^.c-6","flg":20},"ev","str","^Nunca tive a oportunidade...","/str","/ev",{"*":".^.c-7","flg":20},"ev","str","^Eu venho de um lugar pior...","/str","/ev",{"*":".^.c-8","flg":20},{"c-5":["^ — Não, não assim. — Você responde. Não importa quantas cidades você acabe visitando, a devastação não é algo que você possa se acostumar.","\n",{"->":".^.^.^.g-3"},{"#f":5}],"c-6":["^ — Eu sempre achei que as pessoas exageravam. — Você foi sincero, as histórias sobre como eram as cidades do velho mundo sempre inventavam alguns detalhes mórbidos.","\n",{"->":".^.^.^.g-3"},{"#f":5}],"c-7":["^ — Nunca tive a oportunidade. — Bom, você não mentiu.","\n",{"->":".^.^.^.g-3"},{"#f":5}],"c-8":["^ — Eu venho de um lugar pior.— Você fala como se quisesse assustar Samuel e acabar com aquela conversa fiada.","\n",{"->":".^.^.^.g-3"},{"#f":5}],"#f":5}],"g-3":["^— É difícil de imaginar. —  Ele responde sem saber para onde conduzir o resto dessa conversa. Samuel não parece ser uma pessoa ruim; muito pelo contrário, no velho mundo ele seria um amigo valioso mas esse não é o velho mundo.","\n","^Você tenta pensar em algo para não deixar partir a única conversa sincera que você teve nos últimos dias mas seus pensamentos são interrompidos pelo pior som que uma pessoa pode escutar em uma situação como essas: um tiro de rifle.","\n","ev","str","^Cuidado!","/str","/ev",{"*":".^.c-9","flg":20},{"c-9":["\n",{"->":".^.^.^.g-4"},{"#f":5}],"#f":5}],"g-4":["^Você gritou com toda a força dos seus pulmões. Enquanto a areia levantou próximo aos seus camelos. Os animais correram saindo da formação, separando sua caravana. Você tenta manter a calma para conseguir identificar a origem do tiro ao mesmo tempo que tenta não perder seus companheiros de vista mas um novo som ensurdecedor corta sua linha de raciocínio: uma explosão","\n","ev","str","^Teste de força para saber se você consegue domar seu camelo pelas rédeas","/str","/ev",{"*":".^.c-10","flg":20},{"c-10":["\n",{"->":".^.^.^.g-5"},{"#f":5}],"#f":5}],"g-5":["^A poeira sobe na direção por onde corriam Ahmed e seu camelo. Você sente um dos piores cheiros que alguém já teve o desprazer de reconhecer: carne queimada. O que diabos está acontecendo?","\n","^Outro tiro ecoa pelos restos dos prédios. Dessa vez o camelo da doutora Ashford é atingido e os dois vão ao chão. Outro tiro. Você está desnorteado. Ahmed está morto, sua contratante está embaixo de uma carcaça de 400 quilos e você não sabe para qual direção Samuel correu. Um quarto tiro faz você perder o equilíbrio do seu animal assustado, você cai na areia de bruços. Ela não amortece a sua queda. Sua visão escurece. A última coisa que você escuta são tiros de metralhadora.","\n","ev","str","^Se manter acordado.","/str","/ev",{"*":".^.c-11","flg":20},{"c-11":["\n",{"->":".^.^.^.g-6"},{"#f":5}],"#f":5}],"g-6":["ev","str","^Não se entregar","/str","/ev",{"*":".^.c-12","flg":20},{"c-12":["\n",{"->":".^.^.^.g-7"},{"#f":5}],"#f":5}],"g-7":["ev","str","^Eu não vou morrer aqui","/str","/ev",{"*":".^.c-13","flg":20},{"c-13":["\n",{"->":".^.^.^.g-8"},{"#f":5}],"#f":5}],"g-8":["^Você recupera a consciência os ouvindo sons de passos na areia. Sua cabeça dói. Você não consegue distinguir quantos são. Ignorando a dor, você estica a sua mão até sua arma no coldre. Você sabe que estão se aproximando. Você não vai ter outra chance. Com o pouco fôlego que seus pulmões conseguem tomar, você se vira apontando a arma na direção dos passos.","\n","^Um demônio rubro, rosnando com os dentes amostra cambaleia em sua direção. Você aperta o gatilho enquanto ouve um grito.","\n","^— Não! —","\n","ev","str","^Ahmed? O que houve.","/str","/ev",{"*":".^.c-14","flg":20},{"c-14":["\n","^— A porra de uma mina! —","\n","end",{"#f":5}],"#f":5}]}],{"#f":1}],"global decl":["ev",0,{"VAR=":"forca"},0,{"VAR=":"agilidade"},0,{"VAR=":"inteligencia"},0,{"VAR=":"dado1"},0,{"VAR=":"dado2"},0,{"VAR=":"dado3"},0,{"VAR=":"vida"},"/ev","end",null],"#f":1}],"listDefs":{}};