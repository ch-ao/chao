const template = (id) => 
  `
    <!-- Portfolio Section Heading -->
    
    <div     
      data-aos="flip-up" 
      data-aos-duration="300"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      > 
      <h2 class="page-section-heading text-center text-uppercase name animate__animated animate__pulse animate__infinite">${id}</h2>
    </div>

    <!-- Icon Divider -->
    <div class="divider-custom" 
    data-aos="flip-left" 
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    >
      <div class="divider-custom-line"></div>
      <div class="divider-custom-icon">
        <i class="fas fa-star"></i>
      </div>
      <div class="divider-custom-line"></div>
    </div>
  `;

$('#heading-research').html(template('research'));
$('#heading-project').html(template('project'));
$('#heading-game').html(template('game'));
$('#heading-about').html(template('about'));
