var oInput = document.getElementById('searchInput');
var oUl = document.getElementById('searchUl');
var bdyx = document.getElementById('submitInput');

oInput.onkeyup = function() {
    var keyWord = oInput.value;
    var oScript = document.createElement('script');
    oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + keyWord + '&cb=' + 'doJSON';
    document.body.appendChild(oScript);
    oScript.remove();
}
bdyx.onclick = function() {
    var keyWord = oInput.value;
    window.location.href = 'https://www.baidu.com/s?wd=' + keyWord;
    
}
function doJSON(data) {
    var dataList = data.s;
    oUl.innerHTML = '';
    if(dataList.length) {
        oUl.style.display = 'block';
        dataList.forEach(function(ele, index) {
            var oLi = document.createElement('li');
            var oA =document.createElement('a');
            oA.innerText = ele;
            oA.href = 'https://www.baidu.com/s?wd=' + ele;
            oLi.appendChild(oA);
            oUl.appendChild(oLi);
            oLi.onclick = function() {
                window.location.href = 'https://www.baidu.com/s?wd=' + ele;
            }
        });
    }else {
        oUl.style.display = 'none';
    } 
}