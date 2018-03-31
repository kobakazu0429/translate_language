// en       -- 英語
// (zn-)CN  -- 中国語
// ko       -- 韓国語
// ru       -- ロシア語
// ja       -- 日本語
// de       -- ドイツ語
// la       -- ラテン語
// pt       -- ポルトガル語
// fr       -- フランス語
// el       -- ギリシャ語
// nl       -- オランダ語
// it       -- イタリア語
// ar       -- アラビア語

function doGet(e) {
  payload = JSON.stringify(translates(e));

  ContentService.createTextOutput();

  var output = ContentService.createTextOutput();
      output.setMimeType(ContentService.MimeType.JSON);
      output.setContent(payload);

  return output;
}


function translates(e) {
  var text           = e.parameter.text;
  var sourceLanguage = e.parameter.sourceLanguage;

  var header = ['text' , 'sourceLanguage', 'targetLanguageId', 'targetLanguage', 'translated'];

  var targetLanguage = [], res = [];

  if ('en' != sourceLanguage) targetLanguage.push(['en', '英語']);
  if ('CN' != sourceLanguage) targetLanguage.push(['zh-CN', '中国語']);
  if ('ko' != sourceLanguage) targetLanguage.push(['ko', '韓国語']);
  if ('ru' != sourceLanguage) targetLanguage.push(['ru', 'ロシア語']);
  if ('ja' != sourceLanguage) targetLanguage.push(['ja', '日本語']);
  if ('de' != sourceLanguage) targetLanguage.push(['de', 'ドイツ語']);
  if ('la' != sourceLanguage) targetLanguage.push(['la', 'ラテン語']);
  if ('pt' != sourceLanguage) targetLanguage.push(['pt', 'ポルトガル語']);
  if ('fr' != sourceLanguage) targetLanguage.push(['fr', 'フランス語']);
  if ('el' != sourceLanguage) targetLanguage.push(['el', 'ギリシャ語']);
  if ('nl' != sourceLanguage) targetLanguage.push(['nl', 'オランダ語']);
  if ('it' != sourceLanguage) targetLanguage.push(['it', 'イタリア語']);
  if ('ar' != sourceLanguage) targetLanguage.push(['ar', 'アラビア語']);

  for (var i = 0, j = targetLanguage.length; i < j; i++) {
    var tmp = {};
    tmp[header[0]] = text;
    tmp[header[1]] = sourceLanguage;
    tmp[header[2]] = targetLanguage[i][0];
    tmp[header[3]] = targetLanguage[i][1];
    tmp[header[4]] = LanguageApp.translate(text, sourceLanguage, targetLanguage[i][0]);
    res.push(tmp);
  }

  return res;
}
