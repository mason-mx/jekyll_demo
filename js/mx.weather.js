(function($) {
    $.widget("mx.weather", {
        options: {
            city: "Auckland",
            unit: "C",
            location: "bottom",
            color: "#fff",
            backgroundColor: "#000"
        },
        _create: function() {
            var self = this, o = self.options, el = self.element;

            var icon = $("<div></div>")
                .attr("id", "icon")
                .appendTo(el);
            var city = $("<div></div>")
                .attr("id", "city")
                .append("<strong></strong>")
                .appendTo(el);
            var weather = $("<div></div>")
                .attr("id", "weather")
                .appendTo(el);
            var time = $("<div></div>")
                .attr("id", "time")
                .appendTo(el);

            var url = 'https://api.wunderground.com/api/c6dc8e785d943109/conditions/q/NZ/'+ o.city + '.json'

            $.ajax(url, {
                dataType: 'jsonp',
                success: function(json) {
                    console.log(json.current_observation.weather);
                    city.text(json.current_observation.display_location.full)
                    icon.html('<img src=' + json.current_observation.icon_url + '>')
                    weather.text(json.current_observation.temperature_string + " " + json.current_observation.weather);
                    time.text(json.current_observation.observation_time_rfc822);
                }
            });

            el.css({
                position: "fixed",
                bottom: "60px",
                right: 0,
                //margin-left: "10px",
                //width: capWidth,
                //top: (o.location === "top") ? el.offset().top : el.offset().top + el.height() - capHeight,
                //left: el.offset().left,
                //display: "block"
            });
                     
            $(window).resize(function(){
                el.css({
                    top: (o.location === "top") ? el.offset().top : el.offset().top + el.height() - capHeight,
                    left: el.offset().left
                });
            });
        },
        destroy: function() {           
            this.element.next().remove();
                     
            $(window).unbind("resize");
        },
        _setOption: function(option, value) {
            $.Widget.prototype._setOption.apply( this, arguments );
         
            var el = this.element,
                cap = el.next(),
                capHeight = cap.outerHeight() - parseInt(cap.css("paddingTop")) + parseInt(cap.css("paddingBottom"));
                     
            switch (option) {
                case "location":
                    (value === "top") ? cap.css("top", el.offset().top) : cap.css("top", el.offset().top + el.height() - capHeight);
                    break;
                case "color":
                    el.next().css("color", value);
                    break;
                case "backgroundColor":
                    el.next().css("backgroundColor", value);
                    break;
            }
        }
    });
})(jQuery);