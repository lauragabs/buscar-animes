// Array de objetos que contém informações sobre animes (título, descrição e imagem)
let dados = [
    {
        titulo: "Naruto / Naruto: Shippuden",
        descricao: "Naruto acompanha a história de Naruto Uzumaki, um jovem ninja com o sonho de se tornar Hokage, o líder de sua vila. Rejeitado por muitos devido ao demônio raposa selado em seu corpo, ele cresce enfrentando desafios, fazendo amizades e se desenvolvendo como um guerreiro. Naruto: Shippuden dá continuidade à saga com uma narrativa mais madura e batalhas épicas, explorando o destino, o poder e o significado da amizade.",
        imagem :"https://i.pinimg.com/564x/8b/69/b6/8b69b6523c7e82e7099ed8d1675a7222.jpg"
    },
    {
        titulo: "Attack on Titan (Shingeki no Kyojin)",
        descricao: "Em um mundo onde a humanidade está à beira da extinção, vive-se cercada por muralhas que os protegem dos titãs, criaturas gigantes devoradoras de humanos. A trama segue Eren Yeager e seus amigos enquanto lutam para descobrir a origem dos titãs e o segredo de seu mundo. O anime é conhecido por suas reviravoltas inesperadas, sequências de ação intensas e temas de liberdade e sobrevivência.",
        imagem: "https://i.pinimg.com/736x/27/29/c6/2729c667a7b0fdecf272bff7b80cbf7b.jpg"
    },
    {
        titulo: "One  Piece",
        descricao: "A história de One Piece segue Monkey D. Luffy, um jovem pirata cujo corpo possui habilidades elásticas após comer uma Fruta do Diabo. Ele navega pelos mares com sua tripulação em busca do tesouro lendário One Piece, que supostamente tornará seu descobridor o Rei dos Piratas. O anime combina comédia, aventura, e cenas emocionantes de combate, enquanto explora temas de amizade, lealdade e liberdade.",
        imagem: "https://i.pinimg.com/564x/98/5a/c9/985ac922ef99923a5bdee37d359cbe0d.jpg"
    },
    {
        titulo: "Solo Leveling",
        descricao: "Solo Leveling segue Sung Jin-Woo, o caçador mais fraco do mundo, que após sobreviver a uma dungeon mortal, ganha a habilidade de evoluir ilimitadamente. Conforme ele enfrenta monstros e descobre os segredos dos portais, Jin-Woo se torna o caçador mais poderoso, lidando com ameaças cada vez maiores. O anime é marcado pela evolução constante do protagonista e por batalhas intensas. ",
        imagem: "https://i.pinimg.com/564x/c9/1d/06/c91d06b8692e17e550f413ab14c727f5.jpg"
    },
    {
        titulo: "Blue Exorcist",
        descricao: "Blue Exorcist acompanha Rin Okumura, um adolescente que descobre ser filho de Satanás. Determinado a enfrentar seu destino, Rin se junta a uma academia de exorcistas para aprender a controlar seus poderes demoníacos e lutar contra as forças do mal. Enquanto tenta esconder sua verdadeira origem, ele se aproxima de outros exorcistas e enfrenta dilemas sobre seu lado humano e demoníaco. O anime é conhecido por suas batalhas sobrenaturais e temas de identidade e família. ",
        imagem: "https://i.pinimg.com/564x/86/e8/1d/86e81d864f83d00e74266bb22e72a97c.jpg"
    },
    {
        titulo: "My Hero Academia",
        descricao: "Em um mundo onde quase todos têm superpoderes, chamados de 'Quirks', Izuku Midoriya, um jovem sem poderes, sonha em se tornar um herói. Ele é escolhido pelo maior herói do mundo, All Might, para herdar seu poder e se inscreve na U.A., uma escola para heróis em treinamento.",
        imagem: "https://i.pinimg.com/564x/4c/32/2c/4c322cd82229df6be0356160678fa03c.jpg"
    },
    {
        titulo: "Demon Slayer (Kimetsu no Yaiba)",
        descricao: "Tanjiro Kamado é um jovem que embarca em uma jornada para vingar sua família, que foi assassinada por demônios, e salvar sua irmã Nezuko, que se transformou em um demônio. Ele treina para se tornar um matador de demônios e enfrenta inimigos poderosos ao longo do caminho.",
        imagem: "https://i.pinimg.com/564x/74/67/87/7467872bfbc09fc83fa9fe621501f691.jpg"
    },
    {
        titulo: "Death Note",
        descricao: "Light Yagami, um estudante brilhante, encontra um caderno sobrenatural chamado 'Death Note', que lhe dá o poder de matar qualquer pessoa cujo nome seja escrito nele. Light embarca em uma jornada para se tornar o 'deus de um novo mundo', enquanto é perseguido por um detetive brilhante conhecido apenas como 'L'.",
        imagem: "https://i.pinimg.com/564x/91/f0/60/91f060eba6cd47aa60e2f50d47a36d4e.jpg"
    },
    {
        titulo: "Fullmetal Alchemist: Brotherhood",
        descricao: "A história segue os irmãos Edward e Alphonse Elric, que usam a alquimia para tentar restaurar seus corpos após um experimento que deu errado. A série explora temas como sacrifício, amizade e a busca pelo poder.",
        imagem: "https://i.pinimg.com/564x/f9/a3/8e/f9a38e678f7186e6b654c5b7a3e1462d.jpg"
    },
    {
        titulo: "Sword Art Online",
        descricao: "Em 2022, milhares de jogadores ficam presos em um MMORPG de realidade virtual chamado Sword Art Online. O protagonista, Kirito, precisa lutar para sobreviver em um jogo onde a morte virtual significa morte no mundo real.",
        imagem: "https://i.pinimg.com/236x/8e/bc/91/8ebc9174973c1380909e7fc41791fa83.jpg"
    },
    {
        titulo: "Hunter x Hunter",
        descricao: "Gon Freecss descobre que seu pai, que ele achava estar morto, é na verdade um caçador lendário. Decidido a seguir os passos do pai, Gon se junta a outros aspirantes a caçadores em sua busca para se tornar um dos melhores.",
        imagem: "https://play-lh.googleusercontent.com/1HKFlXcCwRalbKMwYgsOdXUizcKp84rtA0I1qrM6ESmZUTaGFePrlHcJfYif9wm79Vru=w240-h480-rw"
    },
    {
        titulo: "Tokyo Ghoul",
        descricao: "Em um mundo onde seres conhecidos como 'ghouls' vivem entre os humanos e se alimentam de carne humana, Kaneki Ken é um jovem que, após um acidente, se transforma em meio humano, meio ghoul. Ele deve aprender a conviver com sua nova realidade.",
        imagem: "https://i.pinimg.com/564x/37/39/6d/37396d0ff830ee0a4ae6629a46c902c7.jpg"
    },
    {
        titulo: "Fairy Tail",
        descricao: "Fairy Tail segue as aventuras de Natsu Dragneel e seus amigos na guilda de magos Fairy Tail. Juntos, eles enfrentam várias ameaças e desafios enquanto fortalecem seus laços de amizade e superam obstáculos mágicos.",
        imagem: "https://i.pinimg.com/564x/69/83/4d/69834dfb57b931d253ca7ffc9d32a84e.jpg"
    },
    {
        titulo: "Bleach",
        descricao: "Ichigo Kurosaki, um adolescente capaz de ver fantasmas, se torna um Shinigami substituto para proteger os vivos dos espíritos malignos conhecidos como Hollows. A história explora suas batalhas no mundo espiritual e seus desafios para manter o equilíbrio entre a vida e a morte.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_8-RDx642dV81eDLfUO5ZeQTpg05CMwVBQ&s"
    },
    {
        titulo: "Black Clover",
        descricao: "Asta, um jovem sem qualquer habilidade mágica em um mundo onde todos têm magia, sonha em se tornar o Rei dos Magos. Com determinação e um grimório raro de anti-magia, ele enfrenta desafios enquanto luta para superar seus limites.",
        imagem: "https://i.pinimg.com/564x/52/6b/96/526b96151cf5309f8a6b24aaa27dc9e5.jpg"
    },
    {
        titulo: "Jujutsu Kaisen",
        descricao: "Yuuji Itadori, um estudante do ensino médio, se envolve no mundo dos feiticeiros de Jujutsu ao ingerir um dedo amaldiçoado que contém o espírito do poderoso Sukuna. Ele agora deve lutar contra maldições enquanto tenta controlar seu corpo compartilhado.",
        imagem: "https://i.pinimg.com/564x/68/5c/b6/685cb603aee1e904f391fd33a265c570.jpg"
    },
    {
        titulo: "The Rising of the Shield Hero",
        descricao: "Naofumi Iwatani é transportado para um mundo de fantasia como o Herói do Escudo. Traído e desacreditado, ele deve lutar para se tornar mais forte e salvar o reino da destruição, enquanto enfrenta muitos desafios.",
        imagem: "https://i0.wp.com/ovicio.com.br/wp-content/uploads/2024/01/20240122-shield-hero.jpg?resize=555%2C555&ssl=1"
    },
    {
        titulo: "Your Name (Kimi no Na wa)",
        descricao: "Dois adolescentes, Mitsuha e Taki, inexplicavelmente trocam de corpo e vidas em momentos aleatórios. À medida que eles começam a se comunicar e a entender suas realidades, uma ligação especial se desenvolve entre eles.",
        imagem: "https://i.pinimg.com/564x/cb/d9/46/cbd94657c5ed0ccfc6fdad208713bde2.jpg"
    }
];

