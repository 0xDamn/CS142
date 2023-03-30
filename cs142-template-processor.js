function Cs142TemplateProcessor(template) {
    this.template = template;

    this.fillIn = function(dictionary) {
        re = /{{.+?}}/g
        var processed_template = this.template.replace(re, function(result) {
            re = /(?<={{).+?(?=}})/g
            key = result.match(re);

            let val = dictionary[key];
            if (val !== undefined) {
                return val;
            } else {
                return "";
            }
        });
        return processed_template;
    };
}