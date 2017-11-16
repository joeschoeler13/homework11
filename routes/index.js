
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'Cloudant Boiler Plate' });
};

exports.index1 = function(req, res){
  res.render('index1.html', { title: 'index1' });
};