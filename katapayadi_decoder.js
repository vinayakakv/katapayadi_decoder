import {AksharaTokenizerKannada} from 'https://cdn.jsdelivr.net/gh/vinayakakv/akshara_tokenizer@1.0.0/akshara_tokenizer.js'

function katapayadi_decode(string) {
    let tokenizer = new AksharaTokenizerKannada();
    let tokens = tokenizer.tokenize(string);
    let ord = c => c.charCodeAt(0);
    let mapper = char_dict => {
        let value = '0';
        if (char_dict['vyamjana']) {
            let char = ord(char_dict['vyamjana'])
            if (char_dict['virama'])
                value = '';
            else if (char >= ord('ಕ') && char < ord('ಞ'))
                value = char - ord('ಕ') + 1
            else if (char >= ord('ಟ') && char < ord('ನ'))
                value =  char - ord('ಟ') + 1
            else if (char >= ord('ಪ') && char <= ord('ಮ'))
                value =  char - ord('ಪ') + 1
            else if (char >= ord('ಯ') && char <= ord('ಹ'))
                value =  ['ಯ','ರ','ಲ','ವ','ಶ','ಷ','ಸ','ಹ', 'ಳ'].map(ord).indexOf(char) + 1
        }
        return value.toString();
    }
    return tokens.map(mapper).join('');
}

export { katapayadi_decode }
