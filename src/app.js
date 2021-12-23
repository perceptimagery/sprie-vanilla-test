console.log('App begin');
console.log('Sprie: ', Sprie);
const apiKey = 'df711d0e1ca8544553';
// const apiKey = '320fc860da1d849a98';
// Sprie.Init({ apikey: 'xxxx' });
const Load3D = (sku) => {
    // sku = 'knk1';
    console.log('Loading Model ...');
    console.log({sku,apiKey});
    Sprie.Load('sprie-key', { id:sku, apiKey }, () => {});
}