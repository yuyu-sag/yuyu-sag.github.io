'use strict';

// jQueryを読み込む
$(document).ready(function () {

// navを開く
  $('#open_nav').on('click', function () {
    $('#wrapper, #nav').toggleClass('show');
  });
});

// ハンバーガー三本線からバツ印に
$(function () {
  $('div #line').on('click', function () {
    $('.bar1, .bar2, .bar3').toggleClass('open');
  })
});

// 画像表示
$(function () {
  var setImg = '#photo';
  var fadeSpeed = 1600;
  var switchDelay = 5000;

  $(setImg).children('img').css({ opacity: '0' });
  $(setImg + ' img:first').stop().animate({ opacity: '1', zIndex: '20' }, fadeSpeed);

  setInterval(function () {
    $(setImg + ' :first-child').animate({ opacity: '0' }, fadeSpeed).next('img').animate({ opacity: '1' }, fadeSpeed).end().appendTo(setImg);
  }, switchDelay);
});

//topへ戻るボタン
$(function () {
  // 変数にクラスを入れる
  var btn = $('.button');

  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function () {
    if ($(this).scrollTop() > 100) {
      btn.addClass('active');
    } else {
      btn.removeClass('active');
    }
  });

  //スクロールしてトップへ戻る
  btn.on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});


//ページ内リンク 
$(function () {
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^=#]').click(function () {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

// オンクリックで商品情報を表示する
$(document).ready(function () {
  let item = ['.image1', '.image2', '.image3', '.image4',
    '.image5', '.image6', '.image7', '.image8', '.image9', '.image10', '.image11', '.image12'];

  let names = ['バゲット', 'クロワッサン', 'プレッツェル', 'シナモンロール',
    'サンドウィッチ', 'ピザ', 'ミルクレープ', 'いちごクロワッサン',
    'アップルパイ', 'チョコレートケーキ', 'ブルーベリータルト', 'ティラミス'];

  let texts = ['当店の人気No.1商品です。', 
  　'北海道産バターをたっぷりと使用しました。',
    '表面の焼き色が特徴的なドイツ発祥のパンです。', 
    'シナモンをたっぷりと使用しました。', 
    '新鮮な食材を使用したBLTサンドです。', 
    'オリーブの風味が特徴的なピザです。',
    '甘さ控えめの生クリームを何層にもクレープで挟みました。',
    '栃木産とちおとめと生クリームの入ったクロワッサンです。',
    '創業当時から変わらぬ製法の当店自慢のアップルパイです。',
    'ビターチョコレートを使用し甘さ控えめです。',
    'さわやかなブルーベリーをたっぷり乗せたタルトです。',
    'エスプレッソを含ませたスポンジとマスカルポーネの相性が抜群です。'];

  for(let i =0 ; i<12; i++){

  $(item[i]).on('click', function () {
    $('#item').text(names[i])
    $('#detail').text(texts[i])
  });
}
});
