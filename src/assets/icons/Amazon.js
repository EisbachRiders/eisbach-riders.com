import React from 'react'
import PropTypes from 'prop-types'

const AmazonIcon = ({ className, width, height, fill, viewBox }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title"
    className={className}
  >
    <title id="title_amazon">Amazon Icon</title>
    <filter id="filter3174" colorInterpolationFilters="sRGB">
      <feGaussianBlur id="feGaussianBlur3176" stdDeviation="1.71" />
    </filter>
    <g id="layer2" display="none">
      <g
        id="rect3745"
        display="inline"
        opacity="0.9"
        filter="url(#filter3174)"
        enableBackground="new    "
      >
        <path
          fill={fill}
          d="M11,7h74c3.313,0,6,2.687,6,6v73c0,3.313-2.687,6-6,6H11c-3.313,0-6-2.687-6-6V13
			C5,9.687,7.687,7,11,7z"
        />
      </g>
    </g>
    <g>
      <path
        id="path3673"
        inkscapeconnector-curvature="0"
        fill={fill}
        d="M261.789,134.426
		c-16.679-22.826-34.57-41.397-34.57-83.872v-141c0-59.759,4.331-114.619-40.186-155.732c-35.041-33.34-93.25-45.103-137.767-45.103
		c-87.066,0-184.192,32.13-204.56,138.599c-2.156,11.309,6.146,17.229,13.672,18.893l88.655,9.493
		c8.302-0.417,14.297-8.491,15.904-16.623c7.602-36.688,38.654-54.313,73.545-54.313c18.817,0,40.186,6.808,51.324,23.507
		c12.822,18.589,11.101,44.138,11.101,65.602v11.819C45.882-88.441-23.483-84.545-73.144-63.006
		c-57.281,24.546-97.505,74.491-97.505,147.903c0,94.082,59.854,141.114,136.916,141.114c65.035,0,100.626-15.186,150.796-65.791
		c16.643,23.865,22.089,35.363,52.441,60.345c6.807,3.594,15.583,3.252,21.614-2.155l0.021-0.02l0.207,0.227
		c18.268-16.074,51.438-44.592,70.141-60.098C268.956,152.448,267.632,142.633,261.789,134.426z M81.794,93.767
		c-14.522,25.53-37.652,41.15-63.352,41.15c-35.042,0-55.618-26.476-55.618-65.641c0-77.1,69.933-91.094,136.065-91.094v19.535
		h0.019C98.908,32.986,99.76,62.354,81.794,93.767z"
      />
      <g
        id="g3717"
        transform="matrix(4.0940394,0,0,4.0940394,105.99043,-56.114346)"
      >
        <path
          id="path3719"
          inkscapeconnector-curvature="0"
          fill={fill}
          d="M64.762,84.122c-21.39,15.782-52.41,24.179-79.125,24.179
			c-37.427,0-71.14-13.834-96.65-36.865c-2.001-1.811-0.215-4.284,2.189-2.878c27.527,16.018,61.562,25.66,96.714,25.66
			c23.716,0,49.781-4.917,73.764-15.096C65.272,77.592,68.304,81.512,64.762,84.122L64.762,84.122z"
        />
        <path
          id="path3721"
          inkscapeconnector-curvature="0"
          fill={fill}
          d="M73.663,73.956c-2.734-3.499-18.091-1.658-24.978-0.826
			c-2.095,0.243-2.417-1.575-0.535-2.909c12.246-8.601,32.313-6.112,34.647-3.237c2.352,2.915-0.614,23.03-12.093,32.626
			c-1.766,1.481-3.443,0.701-2.663-1.253C70.623,91.9,76.407,77.461,73.663,73.956z"
        />
      </g>
    </g>
  </svg>
)

AmazonIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
}

AmazonIcon.defaultProps = {
  width: '32',
  height: '32',
  viewBox: '-352.037 -291.281 800.073 678.559',
  fill: 'currentColor',
}

export default AmazonIcon
