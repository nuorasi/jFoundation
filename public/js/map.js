function isTablet() {
    return $(window).width() > 768;
}

class MapboxElement {
    constructor ( el ) {
        this.$el = el instanceof jQuery ? el : $(el)
        this.$nav = this.$el.find('.js-nav')
        this.$mapEl = this.$el.find('.js-map-element')
        this.$groupButton = this.$el.find('.js-group-button')
        this.$locations = this.$el.find('.js-locations')
        this.$locationsTitle = this.$el.find('.js-locations-title')
        this.$locationsList = this.$el.find('.js-locations-list')
        this.$select = this.$el.find('.js-select')
        this.id = this.$mapEl.attr('id')
        this.config = this.$mapEl.data('config')
        this.markers = this.$mapEl.data('markers')

        this.onGroupClick = this.onGroupClick.bind(this)
        this.onMarkerClick = this.onMarkerClick.bind(this)
        this.addMarker = this.addMarker.bind(this)
        this.onLocationsMouseenter = this.onLocationsMouseenter.bind(this)
        this.onLocationsMouseleave = this.onLocationsMouseleave.bind(this)
        this.onLocationListItemMouseenter = this.onLocationListItemMouseenter.bind(this)
        this.onLocationListItemMouseleave = this.onLocationListItemMouseleave.bind(this)
        this.onSelectChange = this.onSelectChange.bind(this)
        this.onMapClick = this.onMapClick.bind(this)

        mapboxgl.accessToken = "pk.eyJ1IjoidGF5bG9ycGciLCJhIjoiY2tscXJkaHB0MWZrcjJxbTI2cGhiZGpqNiJ9.Xzwcqk8-nzUYW-XLAwcgDg"

        this.map = new mapboxgl.Map({
            container: this.id,
            scrollZoom: false,
            zoom: isTablet() ? 16 : 14,
            center: [this.config.center.lng, this.config.center.lat],
            style: 'mapbox://styles/taylorpg/cklqrfivz4t4d18mv5ictqlbr',
            pitchWithRotate: false
        })

        this.nav = new mapboxgl.NavigationControl({
            visualizePitch: true
        })

        this.select = new Choices(this.$select[0], {
            shouldSort: false,
            searchEnabled: false,
            itemSelectText: 'Select'
        })

        this.$select.on('change', this.onSelectChange)

        this.map.addControl(this.nav, 'bottom-right')
        this.map.on('click', this.onMapClick)

        this.$groupButton.on('click', this.onGroupClick)
        this.$locations.on('mouseenter', this.onLocationsMouseenter)
        this.$locations.on('mouseleave', this.onLocationsMouseleave)
        this.$locations.on('mouseenter', 'li', this.onLocationListItemMouseenter)
        this.$locations.on('mouseleave', 'li', this.onLocationListItemMouseleave)

        this.activeMarkers = []

        this.addHomeMarker()

        // init
        this.$nav.find('li:first-child button').trigger('click')
    }

    destroy () {

    }

    addHomeMarker () {
        let $el = $('<div class="o-home-marker" />')
        $el.append('<div class="o-home-marker__logo" />')

        let marker = new mapboxgl.Marker($el[0]);

        marker
            .setLngLat([this.config.center.lng, this.config.center.lat])
            .addTo(this.map)
    }

    addMarker ( config, i ) {
        let $el = $('<div class="o-marker js-marker" />')
        $el.append(`<span>${i + 1}</span>`)
        $el.append(`
      <div class="o-marker__tooltip">
        <div>${config.name}</div>
        <p>
          ${config.address.replace('\n', '<br />')}
        </p>
      </div>
    `)

        let marker = new mapboxgl.Marker($el[0]);

        marker
            .setLngLat([config.lng, config.lat])
            .addTo(this.map)

        this.activeMarkers.push(marker)

        $el.on('click', this.onMarkerClick)
    }

    closeTooltips () {
        lodash.each(this.activeMarkers, m => {
            $(m.getElement()).removeClass('is-active')
        })
    }

    setActiveGroup ( title, group ) {
        let markers = lodash.filter(this.markers, m => m.group === group);

        this.$locationsTitle.html(title)

        this.$locationsList.empty()

        lodash.each(markers, (m, i) => {
            this.$locationsList.append(`
        <li>
          <span>${i + 1}</span>
          <span>${m.name}</span>
        </li>
      `)
        })

        this.$nav
            .find(`button[data-group="${group}"]`)
            .closest('li')
            .addClass('is-active')
            .siblings()
            .removeClass('is-active')

        this.removeMarkers()
        lodash.each(markers, this.addMarker)
    }

    removeMarkers () {
        lodash.each(this.activeMarkers, m => {
            m.remove()
        })

        this.activeMarkers = []
    }

    onGroupClick ( e ) {
        let $this = $(e.currentTarget),
            group = $this.data('group'),
            title = $this.data('title')

        this.setActiveGroup(title, group)
    }

    onSelectChange ( e ) {
        let $this = $(e.currentTarget)

        let [group, title] = $this.val().split(':')

        this.setActiveGroup(title, group)
    }

    onMarkerClick ( e ) {
        this.closeTooltips()

        let $this = $(e.currentTarget)
        $this.toggleClass('is-active')
    }

    onMapClick ( e ) {
        let $target = $(e.originalEvent.target)

        if ( $target.closest('.js-marker').length === 0 )
            this.closeTooltips()
    }

    onLocationsMouseenter () {
        window.App.scroll.stop()
    }

    onLocationsMouseleave () {
        window.App.scroll.start()
    }

    onLocationListItemMouseenter ( e ) {
        let $this = $(e.currentTarget),
            index = $this.index(),
            marker = this.activeMarkers[index],
            $marker = $(marker.getElement())

        this.closeTooltips()

        $marker.addClass('is-active')
    }

    onLocationListItemMouseleave () {
        this.closeTooltips()
    }
}

$(function() {
    if ($(".map-module").length) {
        map = new MapboxElement($(".map-module"));
    }
});
