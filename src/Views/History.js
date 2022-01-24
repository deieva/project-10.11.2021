import '../Assets/Css/History.css';
import $ from 'jquery';

let i;
let checkMQ;
let elementInViewport;

function History() {
        var timelines = $(".cd-horizontal-timeline"),
          eventsMinDistance = 60;
      
        timelines.length > 0 && initTimeline(timelines);
      
        function initTimeline(timelines) {
          timelines.each(function () {
            var timeline = $(this),
              timelineComponents = {};
            //cache timeline components
            timelineComponents["timelineWrapper"] = timeline.find(".events-wrapper");
            timelineComponents["eventsWrapper"] = timelineComponents[
              "timelineWrapper"
            ].children(".events");
            timelineComponents["fillingLine"] = timelineComponents[
              "eventsWrapper"
            ].children(".filling-line");
            timelineComponents["timelineEvents"] = timelineComponents[
              "eventsWrapper"
            ].find("a");
            timelineComponents["timelineDates"] = parseDate(
              timelineComponents["timelineEvents"]
            );
            timelineComponents["eventsMinLapse"] = minLapse(
              timelineComponents["timelineDates"]
            );
            timelineComponents["timelineNavigation"] = timeline.find(
              ".cd-timeline-navigation"
            );
            timelineComponents["eventsContent"] = timeline.children(
              ".events-content"
            );
      
            //assign a top postion to the single events along the timeline
            setDatePosition(timelineComponents, eventsMinDistance);
            //assign a height to the timeline
            var timelineTotheight = setTimelineheight(
              timelineComponents,
              eventsMinDistance
            );
            //the timeline has been initialize - show it
            timeline.addClass("loaded");
      
            //detect click on the next arrow
            timelineComponents["timelineNavigation"].on(
              "click",
              ".next",
              function (event) {
                event.preventDefault();
                updateSlide(timelineComponents, timelineTotheight, "next");
              }
            );
            //detect click on the prev arrow
            timelineComponents["timelineNavigation"].on(
              "click",
              ".prev",
              function (event) {
                event.preventDefault();
                updateSlide(timelineComponents, timelineTotheight, "prev");
              }
            );
            //detect click on the a single event - show new event content
            timelineComponents["eventsWrapper"].on("click", "a", function (event) {
              event.preventDefault();
              timelineComponents["timelineEvents"].removeClass("selected");
              $(this).addClass("selected");
              updateOlderEvents($(this));
              updateFilling(
                $(this),
                timelineComponents["fillingLine"],
                timelineTotheight
              );
              updateVisibleContent($(this), timelineComponents["eventsContent"]);
            });
      
            //on swipe, show next/prev event content
            timelineComponents["eventsContent"].on("swipetop", function () {
              var mq = checkMQ();
              mq === "mobile" &&
                showNewContent(timelineComponents, timelineTotheight, "next");
            });
            timelineComponents["eventsContent"].on("swiperight", function () {
              var mq = checkMQ();
              mq === "mobile" &&
                showNewContent(timelineComponents, timelineTotheight, "prev");
            });
      
            //keyboard navigation
            $(document).on(function (event) {
              if (event.which === "37" && elementInViewport(timeline.get(0))) {
                showNewContent(timelineComponents, timelineTotheight, "prev");
              } else if (event.which === "39" && elementInViewport(timeline.get(0))) {
                showNewContent(timelineComponents, timelineTotheight, "next");
              }
            });
          });
        }
      
        function updateSlide(timelineComponents, timelineTotheight, string) {
          //retrieve translateX value of timelineComponents['eventsWrapper']
          var translateValue = getTranslateValue(timelineComponents["eventsWrapper"]),
            wrapperheight = Number(
              timelineComponents["timelineWrapper"].css("height").replace("px", "")
            );
          //translate the timeline to the top('next')/right('prev')
          string === "next"
            ? translateTimeline(
                timelineComponents,
                translateValue - wrapperheight + eventsMinDistance,
                wrapperheight - timelineTotheight
              )
            : translateTimeline(
                timelineComponents,
                translateValue + wrapperheight - eventsMinDistance
              );
        }
      
        function showNewContent(timelineComponents, timelineTotheight, string) {
          //go from one event to the next/previous one
          var visibleContent = timelineComponents["eventsContent"].find(".selected"),
            newContent =
              string === "next" ? visibleContent.next() : visibleContent.prev();
      
          if (newContent.length > 0) {
            //if there's a next/prev event - show it
            var selectedDate = timelineComponents["eventsWrapper"].find(".selected"),
              newEvent =
                string === "next"
                  ? selectedDate.parent("li").next("li").children("a")
                  : selectedDate.parent("li").prev("li").children("a");
      
            updateFilling(
              newEvent,
              timelineComponents["fillingLine"],
              timelineTotheight
            );
            updateVisibleContent(newEvent, timelineComponents["eventsContent"]);
            newEvent.addClass("selected");
            selectedDate.removeClass("selected");
            updateOlderEvents(newEvent);
            updateTimelinePosition(
              string,
              newEvent,
              timelineComponents,
              timelineTotheight
            );
          }
        }
      
        function updateTimelinePosition(
          string,
          event,
          timelineComponents,
          timelineTotheight
        ) {
          //translate timeline to the top/right according to the position of the selected event
          var eventStyle = window.getComputedStyle(event.get(0), null),
            eventtop = Number(eventStyle.getPropertyValue("top").replace("px", "")),
            timelineheight = Number(
              timelineComponents["timelineWrapper"].css("height").replace("px", "")
            ),
            timelineTotheight = Number(
              timelineComponents["eventsWrapper"].css("height").replace("px", "")
            );
          var timelineTranslate = getTranslateValue(
            timelineComponents["eventsWrapper"]
          );
      
          if (
            (string === "next" && eventtop > timelineheight - timelineTranslate) ||
            (string === "prev" && eventtop < -timelineTranslate)
          ) {
            translateTimeline(
              timelineComponents,
              -eventtop + timelineheight / 2,
              timelineheight - timelineTotheight
            );
          }
        }
      
        function translateTimeline(timelineComponents, value, totheight) {
          var eventsWrapper = timelineComponents["eventsWrapper"].get(0);
          value = value > 0 ? 0 : value; //only negative translate value
          value =
            !(typeof totheight === "undefined") && value < totheight
              ? totheight
              : value; //do not translate more than timeline height
          setTransformValue(eventsWrapper, "translateY", value + "px");
          //update navigation arrows visibility
          value === 0
            ? timelineComponents["timelineNavigation"]
                .find(".prev")
                .addClass("inactive")
            : timelineComponents["timelineNavigation"]
                .find(".prev")
                .removeClass("inactive");
          value == totheight
            ? timelineComponents["timelineNavigation"]
                .find(".next")
                .addClass("inactive")
            : timelineComponents["timelineNavigation"]
                .find(".next")
                .removeClass("inactive");
        }
      
        function updateFilling(selectedEvent, filling, totheight) {
          //change .filling-line length according to the selected event
          var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
            eventtop = eventStyle.getPropertyValue("top"),
            eventheight = eventStyle.getPropertyValue("height");
          eventtop =
            Number(eventtop.replace("px", "")) +
            Number(eventheight.replace("px", "")) / 2;
          var scaleValue = eventtop / totheight;
          setTransformValue(filling.get(0), "scaleY", scaleValue);
        }
      
        function setDatePosition(timelineComponents, min) {
          for (i = 0; i < timelineComponents["timelineDates"].length; i++) {
            var distance = daydiff(
                timelineComponents["timelineDates"][0],
                timelineComponents["timelineDates"][i]
              ),
              distanceNorm =
                Math.round(distance / timelineComponents["eventsMinLapse"]) + 2;
            timelineComponents["timelineEvents"]
              .eq(i)
              .css("top", distanceNorm * min + "px");
          }
        }
      
        function setTimelineheight(timelineComponents, height) {
          var timeSpan = daydiff(
              timelineComponents["timelineDates"][0],
              timelineComponents["timelineDates"][
                timelineComponents["timelineDates"].length - 1
              ]
            ),
            timeSpanNorm = timeSpan / timelineComponents["eventsMinLapse"],
            timeSpanNorm = Math.round(timeSpanNorm) + 4,
            totalheight = timeSpanNorm * height;
          timelineComponents["eventsWrapper"].css("height", totalheight + "px");
          updateFilling(
            timelineComponents["timelineEvents"].eq(0),
            timelineComponents["fillingLine"],
            totalheight
          );
      
          return totalheight;
        }
      
        function updateVisibleContent(event, eventsContent) {
          var eventDate = event.data("date"),
            visibleContent = eventsContent.find(".selected"),
            selectedContent = eventsContent.find('[data-date="' + eventDate + '"]'),
            selectedContentHeight = selectedContent.height();
      
          if (selectedContent.index() > visibleContent.index()) {
            var classEnetering = "selected enter-right",
              classLeaving = "leave-top";
          } else {
            var classEnetering = "selected enter-top",
              classLeaving = "leave-right";
          }
      
          selectedContent.attr("class", classEnetering);
          visibleContent
            .attr("class", classLeaving)
            .one(
              "webkitAnimationEnd oanimationend msAnimationEnd animationend",
              function () {
                visibleContent.removeClass("leave-right leave-top");
                selectedContent.removeClass("enter-top enter-right");
              }
            );
          eventsContent.css("height", selectedContentHeight + "px");
        }
      
        function updateOlderEvents(event) {
          event
            .parent("li")
            .prevAll("li")
            .children("a")
            .addClass("older-event")
            .end()
            .end()
            .nextAll("li")
            .children("a")
            .removeClass("older-event");
        }
      
        function getTranslateValue(timeline) {
          var timelineStyle = window.getComputedStyle(timeline.get(0), null),
            timelineTranslate =
              timelineStyle.getPropertyValue("-webkit-transform") ||
              timelineStyle.getPropertyValue("-moz-transform") ||
              timelineStyle.getPropertyValue("-ms-transform") ||
              timelineStyle.getPropertyValue("-o-transform") ||
              timelineStyle.getPropertyValue("transform");
      
          if (timelineTranslate.indexOf("(") >= 0) {
             timelineTranslate = timelineTranslate.split("(")[1];
            timelineTranslate = timelineTranslate.split(")")[0];
            timelineTranslate = timelineTranslate.split(",");
            var translateValue = timelineTranslate[4];
          } else {
            var translateValue = 0;
          }
      
          return Number(translateValue);
        }
      
        function setTransformValue(element, property, value) {
          element.style["-webkit-transform"] = property + "(" + value + ")";
          element.style["-moz-transform"] = property + "(" + value + ")";
          element.style["-ms-transform"] = property + "(" + value + ")";
          element.style["-o-transform"] = property + "(" + value + ")";
          element.style["transform"] = property + "(" + value + ")";
        }
      
        //based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
        function parseDate(events) {
          var dateArrays = [];
          events.each(function () {
            var dateComp = $(this).data("date").split("/"),
              newDate = new Date(dateComp[2], dateComp[1] - 1, dateComp[0]);
            dateArrays.push(newDate);
          });
          return dateArrays;
        }
      
      
        function daydiff(first, second) {
          return Math.round(second - first);
        }
      
        function minLapse(dates) {
          //determine the minimum distance among events
          var dateDistances = [];
          for (i = 1; i < dates.length; i++) {
            var distance = daydiff(dates[i - 1], dates[i]);
            dateDistances.push(distance);
          }
          return Math.min.apply(null, dateDistances);
        }
      
        /*
              How to tell if a DOM element is visible in the current viewport?
              http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
          */
        /*function elementInViewport(el) {
              var top = el.offsetTop;
              var top = el.offsettop;
              var height = el.offsetheight;
              var height = el.offsetHeight;
      
              while(el.offsetParent) {
                  el = el.offsetParent;
                  top += el.offsetTop;
                  top += el.offsettop;
              }
      
              return (
                  top < (window.pageYOffset + window.innerHeight) &&
                  top < (window.pageXOffset + window.innerheight) &&
                  (top + height) > window.pageYOffset &&
                  (top + height) > window.pageXOffset
              );
          }*/
      
        //check if mobile or desktop device
        /*function checkMQ() {
              return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
          }*/
     
      

    return (
        <div>
           <section class="cd-horizontal-timeline">
  <div class="timeline">
    <div class="events-wrapper">
      <div class="events">
        <ol>
          <li><a href="#0" data-date="16/01/1997" class="selected">1997 - 2001</a></li>
          <li><a href="#0" data-date="28/02/2001">2001 - 2002</a></li>
          <li><a href="#0" data-date="20/04/2002">2002 - 2005</a></li>
          <li><a href="#0" data-date="20/05/2006">2006</a></li>
          <li><a href="#0" data-date="09/07/2007">2007</a></li>
          <li><a href="#0" data-date="30/08/2008">2008</a></li>
          <li><a href="#0" data-date="15/09/2009">2009</a></li>
          <li><a href="#0" data-date="21/10/2012">2012</a></li>
          <li><a href="#0" data-date="01/01/2013">2013</a></li>
          <li><a href="#0" data-date="20/02/2014">2014 - 2015</a></li>
          <li><a href="#0" data-date="21/03/2016">2016</a></li>
        </ol>

        <span class="filling-line" aria-hidden="true"></span>
      </div> 
    </div>
    <ul class="cd-timeline-navigation">
      <li><a href="#0" class="prev inactive">
          <p>&#x21E9</p>
        </a></li>
      <li><a href="#0" class="next">
          <p>&#x21E9</p>
        </a></li>
    </ul> 
  </div> 

  <div class="events-content">
    <ol>
      <li class="selected" data-date="16/01/1997">
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </li>

      <li data-date="28/02/2001">
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </li>

      <li data-date="20/04/2002">
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </li>

      <li data-date="20/05/2006">
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </li>

      <li data-date="09/07/2007">
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        <p> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </li>

      <li data-date="30/08/2008">
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        <p> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </li>

      <li data-date="15/09/2009">
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        <p> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </li>

      <li data-date="21/10/2012">
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        <p> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </li>

      <li data-date="01/01/2013">
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        <p> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </li>

      <li data-date="20/02/2014">
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        <p> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </li>
      <li data-date="21/03/2016">
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
        <p> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </li>

    </ol>
  </div> 
</section>
        </div>
    )
}
export default History;