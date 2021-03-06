(function($) {
    $.widget("mx.weather", {
        options: {
            citysDict: {},
            country: "NZ",
            city: "Auckland",
            unit: "C",
            width: 0,
            color: "#fff",
            backgroundColor: "#000",
            city_full: "",
            temperature_string: "",
            temp_f: "",
            temp_c: "",
            weather: "",
            time: ""
        },

        _create: function() {
            var self = this, o = self.options, el = self.element;

            o.citysDict = {
                "Auckland":   "NZ",
                "Wellington": "NZ"
            };

            $("<div></div>")
                .attr("id", "icon")
                .appendTo(el);
            $("<div></div>")
                .attr("id", "city")
                .appendTo(el);
            $("<strong></strong>")
                .appendTo(city);
            $("<div></div>")
                .attr("id", "weather")
                .appendTo(el);
            $("<div></div>")
                .attr("id", "time")
                .appendTo(el);

            el.css({
                position: "fixed",
                bottom: "30px",
                right: 0
            });

            this._createInterval();
            this._fetchWeather(this._constrain(o.city));
                     
            $(window).resize(function(){
                //el.css({
                //    bottom: "50px"
                //});
                self._updateElements();
            });
        },

        destroy: function() {           
            this.element.next().remove();
                     
            $(window).unbind("resize");
        },

        // create a public method
        city: function(value) {
            // no value passed, act as a getter
            console.log("city functions" + value);
            if (value === undefined) {
                return this.options.city;
            // value passed, act as a setter
            } else {
                this.options.city = this._constrain(value);
                this._fetchWeather(this.options.city);
            }
        },

        // create a private method
        _constrain: function(city) {
            var dict = this.options.citysDict;
            var value = "";
            if (dict[city] === null) {
                value = dict["Auckland"] + "/Auckland";
            }
            else {
                value = dict[city] + "/" + city;
            }
            return value;
        },

        
        _createInterval: function() {
            var self = this, o = self.options;
            setInterval(function(){ self._fetchWeather(self._constrain(o.city)); }, 1800000);
        },

        // create a private method
        _fetchWeather: function(subURL) {
            var self = this, o = self.options;
            var url = 'https://api.wunderground.com/api/c6dc8e785d943109/conditions/q/'+ subURL + '.json'

            $.ajax(url, {
                dataType: 'jsonp',
                success: function(json) {
                    console.log(json.current_observation.weather);
                    o.city_full = json.current_observation.display_location.full;
                    o.icon_url = '<img src=' + json.current_observation.icon_url + '>';
                    o.temperature_string = json.current_observation.temperature_string;
                    o.temp_f = json.current_observation.temp_f;
                    o.temp_c = json.current_observation.temp_c;
                    o.weather = json.current_observation.weather;
                    o.time = json.current_observation.observation_time_rfc822;
                    self._updateElements();
                }
            });
        },

        _updateElements: function() {
            var o = this.options;
            if ($(window).width() > 660) {
                $("#city > strong").text(o.city_full);
                $("#icon").html(o.icon_url);
                $("#weather").text(o.temperature_string + " " + o.weather);
                $("#time").text(o.time);
             }
             else {
                $("#city > strong").text(o.city);
                $("#icon").html(o.icon_url);
                $("#weather").text(o.temp_c + " " + o.weather);
                $("#time").text("");
             }
        },

        _setOption: function(key, value) {
            $.Widget.prototype._setOption.apply( this, arguments );
            console.log("_setOption" + value);
            var el = this.element;
            var o = this.options;
                     
            switch (key) {
                case "city":
                    o.city = value;
                    //this._fetchWeather(this._constrain(value));
                    break;
                case "color":
                    el.css("color", value);
                    break;
                case "backgroundColor":
                    el.css("background-color", value);
                    break;
            }
        }
    });
})(jQuery);