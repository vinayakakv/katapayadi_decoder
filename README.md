# katapayadi_decoder
Kaṭapayādi system is a character to number encoding scheme, which was developed and used by mathematicians of India to encode large numbers into meaningful, and easy-to-remember verses. Read more about it at [blog](https://vinayakakv.github.io/posts/decoding-aksharas/). Its demo is available [here](https://vinayakakv.github.io/katapayadi_decoder/)

## Implementation details
This decoder depends on [Kannada Tokenizer](https://github.com/vinayakakv/akshara_tokenizer). Therefore it is possible to decode the text only in Kannada script. However, it is possible to use a transliteration service, such as [Aksharamukha](https://aksharamukha.appspot.com/converter) to first convert any script into Kannada, and then apply the decoding operation.

## Including the script in your webpage
The decoder is written as a ES6 Module, which you need to [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) in your code. This can be done as follows.
```js
<script type="module">
        import { katapayadi_decode } from "https://cdn.jsdelivr.net/gh/vinayakakv/katapayadi_decoder@1.0.0/katapayadi_decoder.js"
        .
        .
        .
</script>
```
## Documentation
`katapayadi_decode(String) -> String`
- Input is a string in Kannada Script
- Output is a string of numbers decoded according to Kaṭapayādi scheme

## Examples
You can see a demo webpage at [project site](https://vinayakakv.github.io/katapayadi_decoder/), whose source code is available at [index.html](https://github.com/vinayakakv/katapayadi_decoder/blob/master/index.html).

## Contributing
You can contribute to this repository by two means
1. Source code improvements -- Improving the decoder and companion webpage
2. Adding more examples to [`examples.json`](https://github.com/vinayakakv/katapayadi_decoder/blob/master/examples.json)

### Adding examples
[`examples.json`](https://github.com/vinayakakv/katapayadi_decoder/blob/master/examples.json) is a list of `example` objects consisting of 3 fields
1. `verse` - A string consiting of Kaṭapayādi-encoded value. Each number has to be seperated by a comma(`,`). The lines of the verse should be seperated by newline(`\n`).
2. `description` - A string containing description about the verse. This string can include valid HTML tags to support formatting. For links (`<a>`), remember to use (`target="_blank"`) in order to prevent them opening in same tab.
3. `reverse` - A boolean (either `true` or `false`) indicating whether or not to apply reversing to the numbers after decoding.
