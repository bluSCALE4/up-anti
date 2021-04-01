const removeXPathQuery = (xpathQuery, whitelist = [],  attr = '') => {
    const queryResults = document.evaluate(xpathQuery, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, el, length = queryResults.snapshotLength; i < length; i++) {
        el = queryResults.snapshotItem(i);
        if (!whitelist.length || !queryResults.invalidIteratorState && whitelist.find((value) => value !== el[attr])) {
            el.remove();
        };
    }
}
document.querySelector('.regionContentBottom').remove();
document.querySelector('aside').remove();
document.querySelector('body > div').style.backgroundImage = 'none';
document.querySelector('body > div').style.minHeight = '100vh';
document.querySelector('main > div + div').style.cssText = 'grid-template-columns: minmax(0,1fr); margin: 0 auto !important';

setTimeout(() => {
    const contentWhiteList = ['Weather Today Across the Country'];
    removeXPathQuery(`//*[@data-testid='Footer']`);
    removeXPathQuery(`//*[@data-testid='IBMLogo']`);
    removeXPathQuery(`//*[@data-testid='ContentMediaModule']`, contentWhiteList, 'title');
    
    Array.from(document.querySelectorAll('footer')).pop().remove();
    document.querySelector('.tp-modal').remove();
    document.querySelector('.tp-backdrop').remove();
    document.body.removeAttribute('class');
}, 2000);