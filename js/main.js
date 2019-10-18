'use strict'; {

  //○○○○○○○○○○○○○   集計始め   ○○○○○○○○○○○○○
  window.addEventListener('DOMContentLoaded', () => {

    const doneAbility = document.getElementById('doneAbility');
    const doneMind = document.getElementById('doneMind');
    const doneCulture = document.getElementById('doneCulture');
    const doneSocial = document.getElementById('doneSocial');

    let arrayAbility = [];
    let arrayMind = [];
    let arrayCulture = [];
    let arraySocial = [];

    function getRadioValue(name) {
      name = document.querySelectorAll(name);
      let arrayAdd = [];
      for (let i = 0; i < name.length; i++) {
        const nameValue = parseFloat(name[i].value);
        if (name[i].checked) {
          arrayAdd.push(nameValue);
        }
      }
      if (arrayAdd.length !== 5) {
        window.alert('必須項目に未入力がありました');
        return false;
      }
      console.log(arrayAdd);
      return arrayAdd;
    }


    //＊＊＊＊＊  スキル・体力開始  ＊＊＊＊＊
    doneAbility.addEventListener('click', () => {
      let arrayAbility = getRadioValue('.ability');

      let sumAbility = arrayAbility.reduce(function(a, b) {
        return a + b;
      })

      const totalAbility = document.getElementById('totalAbility');

      totalAbility.textContent = `${sumAbility}点`;

      const showAbility = document.querySelector('.show-ability');
      showAbility.style.display = 'none';

      const showMind = document.querySelector('.show-mind');
      showMind.style.display = 'block';
    });
    //＊＊＊＊＊  スキル・体力終了  ＊＊＊＊＊


    //＊＊＊＊＊      精神開始      ＊＊＊＊＊
    doneMind.addEventListener('click', () => {
      let arrayMind = getRadioValue('.mind');

      let sumMind = arrayMind.reduce(function(a, b) {
        return a + b;
      })

      const totalMind = document.getElementById('totalMind');

      totalMind.textContent = `${sumMind}点`;

      const showMind = document.querySelector('.show-mind');
      showMind.style.display = 'none';

      const showCulture = document.querySelector('.show-culture');
      showCulture.style.display = 'block';
    });
    //＊＊＊＊＊      精神終了      ＊＊＊＊＊


    //＊＊＊＊＊      文化開始      ＊＊＊＊＊
    doneCulture.addEventListener('click', () => {
      let arrayCulture = getRadioValue('.culture');

      let sumCulture = arrayCulture.reduce(function(a, b) {
        return a + b;
      })

      const totalCulture = document.getElementById('totalCulture');

      totalCulture.textContent = `${sumCulture}点`;

      const showCulture = document.querySelector('.show-culture');
      showCulture.style.display = 'none';

      const showSocial = document.querySelector('.show-social');
      showSocial.style.display = 'block';
    });
    //＊＊＊＊＊      文化終了      ＊＊＊＊＊


    //＊＊＊＊＊      社交と集計開始      ＊＊＊＊＊
    doneSocial.addEventListener('click', () => {
      let arraySocial = getRadioValue('.social');

      let sumSocial = arraySocial.reduce(function(a, b) {
        return a + b;
      })

      const totalSocial = document.getElementById('totalSocial');

      totalSocial.textContent = `${sumSocial}点`;

      const sumAbility = parseFloat(totalAbility.textContent);
      const sumMind = parseFloat(totalMind.textContent);
      const sumCulture = parseFloat(totalCulture.textContent);

      const sumGround = sumAbility + sumMind + sumCulture + sumSocial;

      totalGround.textContent = `${sumGround}点`;

      judgeGround(sumGround);
      judgeAbility(sumAbility);
      judgeMind(sumMind);
      judgeCulture(sumCulture);
      judgeSocial(sumSocial);

      const showSocial = document.querySelector('.show-social');
      showSocial.style.display = 'none';

      const showJudgement = document.querySelector('.show-judgement');
      showJudgement.style.display = 'block';

      const bg = document.querySelector('.bg');
      bg.style.display = 'none';



    });
    //＊＊＊＊＊      社交と集計終了      ＊＊＊＊＊

  });
  //○○○○○○○○○○○○○   集計終り   ○○○○○○○○○○○○○


  //○○○○○○○○○○○○○   判定の関数始め   ○○○○○○○○○○○○○

  //＊＊＊＊＊      総合判定開始      ＊＊＊＊＊

  function judgeGround(sumGround) {
    const groundP1 = document.getElementById('groundP1');
    const groundP2 = document.getElementById('groundP2');
    const bgJudgement = document.getElementById('bgJudgement');
    bgJudgement.style.paddingTop = '56.25%';
    switch (true) {
      case sumGround >= 80:
        bgJudgement.style.backgroundImage = 'url(img/hasu.jpg)';
        groundP1.textContent = '貴方は十分過ぎるほど上手くやっていけます。';
        groundP2.textContent = '「人は人、我は我」の境地に達観しており、バイタリティーに溢れ、ベトナムの文化、性格を理解する姿勢を持ち、積極的に社内外にネットワークを広げ続ける、そのままの貴方でいてください。現地採用でも高待遇でオファーされそうですし、駐在員を目指すのもアリです。';
        break;
      case sumGround >= 60:
        bgJudgement.style.backgroundImage = 'url(img/hochiminh2.jpg)';
        groundP1.textContent = '貴方は多分上手くやっていけます。';
        groundP2.textContent = '完璧なスコアではありませんが、殆どの人がそんなスコアは取れませんので安心してください。私自身も、このカテゴリです。';
        break;
      case sumGround >= 40:
        bgJudgement.style.backgroundImage = 'url(img/choice.jpg)';
        groundP1.textContent = '一旦、冷却期間を置きましょう。';
        groundP2.textContent = '貴方の今のお気持ちはもしかしたら、ベトナムに現地採用で働きたいのではなく、今の状況を変えたいだけなのかもしれません。';
        break;
      default:
        bgJudgement.style.backgroundImage = 'url(img/stop.jpg)';
        groundP1.textContent = '悪い事は言いません。日本に居たほうがいいです。';
        groundP2.textContent = '詳細は後でご説明しますが、貴方はベトナム人との相性が悪く、仕事、プライベートの両方で多大なストレスを抱え精神を病んでしまう可能性大です。';
    }
  }
  //＊＊＊＊＊      総合判定終り      ＊＊＊＊＊


  //＊＊＊＊＊      スキル体力判定開始      ＊＊＊＊＊
  function judgeAbility(sumAbility) {
    const abilityP1 = document.getElementById('abilityP1');
    const abilityP2 = document.getElementById('abilityP2');
    switch (true) {
      case sumAbility >= 20:
        abilityP1.textContent = '貴方は十分過ぎるほど上手くやっていけます。';
        abilityP2.textContent = 'スキル、体力共に充実した貴方。日本で転職エージェント経由で仕事を先に決めるのも、ベトナムに来てから就職活動をするのもアリです。';
        break;
      case sumAbility >= 15:
        abilityP1.textContent = '貴方は多分上手くやっていけます。';
        abilityP2.textContent = '完璧なスコアではありませんが、多分大丈夫です。ただ、ベトナムは労働ビザ取得は少々厄介で、企業側が雇うと決めても、ベトナムが労働ビザを発行する事を認めない場合もありますので、日本で転職エージェント経由で仕事を先に決めて、労働ビザ取得の目星をつけてからベトナムに来ることをオススメします。';
        break;
      case sumAbility >= 10:
        abilityP1.textContent = '一旦、冷却期間を置きましょう。';
        abilityP2.textContent = 'まずは日本で転職エージェント経由で仕事を紹介してもらえるかどうか確認しましょう。紹介された企業の福利厚生に民間の医療保険があるかどうかも確認しましょう。無い場合は（国から企業が義務付けられた）ローカルの健康保険か、ご自身で民間保険会社と契約することになりますが、現地採用の給料で保険料を払うのはかなりの負担です。また日々の食事ですが、毎回日本食レストランはかなりの負担になりますので、路上のベト飯レストラン（衛生面が不安）がメインとなります。これら条件を踏まえて、ベトナムで働きたいですか？';
        break;
      default:
        abilityP1.textContent = '悪い事は言いません。日本に居たほうがいいです。';
        abilityP2.textContent = 'スキル、健康共に不安を抱えた貴方、悪い事は言いません。日本に居た方がいいです。転職エージェントの現地ブログに惑わされる事なく、「現地採用 やめとけ」でググってみてください。概ね本当です。また、ベトナムで大怪我、大病を患った時、どうなるのか、、、合わせてググってみてください。「ベトナムで骨を埋める覚悟」は貴方にありますか？';
    }
  }
  //＊＊＊＊＊      スキル体力判定終り      ＊＊＊＊＊


  //＊＊＊＊＊      精神判定開始      ＊＊＊＊＊
  function judgeMind(sumMind) {
    const mindP1 = document.getElementById('mindP1');
    const mindP2 = document.getElementById('mindP2');
    switch (true) {
      case sumMind >= 20:
        mindP1.textContent = '貴方は十分過ぎるほど上手くやっていけます。';
        mindP2.textContent = '「人は人、我は我」の境地に達観している貴方、もはや言う事はたった一つ。犬や猫だけでなく、猿、コウモリも触っちゃダメですよ。運が悪いと狂犬病になっちゃいますよ。';
        break;
      case sumMind >= 15:
        mindP1.textContent = '貴方は多分上手くやっていけます。';
        mindP2.textContent = '完璧なスコアではありませんが、多分大丈夫です。「駐在員は２,３年で帰っちゃう人多いけど私は永住しますよ。（本当はそんな気ないけど）お客様、どうか私を信頼して下さい」っていう営業トークが可能ですし、本帰国も会社命令じゃなく、自分の意思でいつでも可能という現地採用ならではのメリットもありますよ。後、犬、猫モフモフすると狂犬病になるかもなので触らないように。万が一噛まれたら病院に直行しましょう。';
        break;
      case sumMind >= 10:
        mindP1.textContent = '一旦、冷却期間を置きましょう。';
        mindP2.textContent = '現地採用者が一番考えてはいけないのは駐在員との待遇比較です。貴方は自由意志でベトナムに来たのに対し駐在員は社命で来ております。待遇に差が出るのは当然です。待遇格差を気にするようなら、現地採用になるのはやめましょう。';
        break;
      default:
        mindP1.textContent = '悪い事は言いません。日本に居たほうがいいです。';
        mindP2.textContent = '現地採用者が一番考えてはいけないのは駐在員との待遇比較です。貴方は自由意志でベトナムに来たのに対し駐在員は社命で来ております。待遇に差が出るのは当然です。貴方は恐らくこの待遇格差を受け入れる事が出来ません。現地採用になるのはやめましょう。';
    }
  }
  //＊＊＊＊＊      精神判定終り      ＊＊＊＊＊


  //＊＊＊＊＊      文化判定開始      ＊＊＊＊＊
  function judgeCulture(sumCulture) {
    const cultureP1 = document.getElementById('cultureP1');
    const cultureP2 = document.getElementById('cultureP2');
    switch (true) {
      case sumCulture >= 20:
        cultureP1.textContent = '貴方は十分過ぎるほど上手くやっていけます。';
        cultureP2.textContent = 'ベトナムの文化、性格を理解する姿勢、柔軟性を持ち合わせる貴方にお伝えすべき事は何もありません。むしろ、師匠と呼ばせてください。';
        break;
      case sumCulture >= 15:
        cultureP1.textContent = '貴方は多分上手くやっていけます。';
        cultureP2.textContent = 'ストレスが溜まる事はあるかもしれませんが、短所は長所に必ず化けるという事を実感できれば多分大丈夫です。実感出来れば逆に日本の文化って非効率で無駄が多く、且つ人の目を気にし過ぎじゃない？と思えるところが多々感じられるようになるかと思います。';
        break;
      case sumCulture >= 10:
        cultureP1.textContent = '一旦、冷却期間を置きましょう。';
        cultureP2.textContent = '文化の違いはここに記載した以外にもたくさんあります。これら許容出来ず日本の常識を（無意識かもしれませんが）押しつけるとベトナム人は貴方にソッポを向けます。または日本食レストランで「ベトナム人は最低だ！！」と言いまくる格好悪い日本人になりかねません。';
        break;
      default:
        cultureP1.textContent = '悪い事は言いません。日本に居たほうがいいです。';
        cultureP2.textContent = '文化の違いはここに記載した以外にもたくさんあります。これら許容出来ず日本の常識を（無意識かもしれませんが）押しつける貴方はベトナム人にソッポを向かれます。こうなってくると精神を病んでもおかしくありません。';
    }
  }
  //＊＊＊＊＊      文化判定終り      ＊＊＊＊＊


  //＊＊＊＊＊      社交判定開始      ＊＊＊＊＊
  function judgeSocial(sumSocial) {
    const socialP1 = document.getElementById('socialP1');
    const socialP2 = document.getElementById('socialP2');
    switch (true) {
      case sumSocial >= 20:
        socialP1.textContent = '貴方は十分過ぎるほど上手くやっていけます。';
        socialP2.textContent = '日本人、ベトナム人との普段コミュニケーションがしっかりとれている貴方にお伝えすべき事は何もありません。むしろ、師匠と呼ばせてください。';
        break;
      case sumSocial >= 15:
        socialP1.textContent = '貴方は多分上手くやっていけます。';
        socialP2.textContent = '日本人、ベトナム人との普段のコミュニケーションがしっかりとれているかが非常に大切です。また日本からの出張者（大体エライ人）が来た時は一次会だけでもご飯をご一緒して親交を深めておく事も同様に大切ですが、貴方ならきっと大丈夫です。';
        break;
      case sumSocial >= 10:
        socialP1.textContent = '一旦、冷却期間を置きましょう。';
        socialP2.textContent = '日本人、ベトナム人との普段のコミュニケーションがしっかりとれているかが非常に大切ですが、貴方はそれが苦手な傾向にあるようです。それでも生活自体は出来ますが有益な情報を入手する機会は減ります事、自覚しておいてください。後、ベトナムは日本以上に娯楽が少ないので、休日やる事が無いとストレス発散出来ないかもです。';
        break;
      default:
        socialP1.textContent = '悪い事は言いません。日本に居たほうがいいです。';
        socialP2.textContent = 'まだまだネットからではベトナムの情報を入手機会は少なく、飲み会やサークル等で仲良くなった日本人から入手するものです。また、ベトナム人スタッフから誘われたのに行かないとなりますと、その後の業務に悪い影響が出ます。嫌々ながらも半分は参加するようにしましょう。出来なければベトナムに来るのはやめましょう。';
    }
  }
  //＊＊＊＊＊      社交判定終り      ＊＊＊＊＊

  //○○○○○○○○○○○○○   判定の関数終り   ○○○○○○○○○○○○○

  //strict終り
}
