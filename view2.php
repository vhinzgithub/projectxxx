

<!DOCTYPE html>
<html>
<head>
	<!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
   <!--  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
 -->

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">

    <link rel="stylesheet" type="text/css" href="style.css">

    <title>projectx</title>

    
</head>
<body>

	<div id="main-content-container">
		<!-- header-container -->
		<div id="header-container">

			<div id="header">
				<div id="sitename">
					<h1><a href="index.php">projectX</a></h1>
				</div>

				<div id="main-nav-toggle">
					<span class="toggle-bar"></span>
					<span class="toggle-bar"></span>
					<span class="toggle-bar"></span>
				</div>

				<div id="search-bar-icon">
					<span class="glyphicon glyphicon-search"></span>
				</div>

				<div id="search-bar-container">
					<form>
						<div id="search-bar-input-text-container">
							<input type="text" />
						</div>
						<div id="search-bar-input-submit-container">
							<input type="submit" value="Search" />
						</div>
					</form>
				</div>

				
				<?php
					if(isset($_SESSION['user'])){
						echo '<div id="logout-container">';
							echo '<a href="logout.php"><span class="glyphicon glyphicon-off"></span> Sign Out</a>';
						echo '</div>';

					}
					else{
						echo '<div id="user-signin-signup-container">';
							echo '<div id="user-signin"><a href="#" id="login-link" class="login-link" onclick="void()">Sign In</a></div>';
							echo '<div id="user-signup"><a href="register.php" id="sign-up-link" class="sign-up-link">Sign Up</a></div>';
						echo '</div>';

					}
				?>
			</div>
		</div>
		<!-- header-container -->

		<div id="main-content">
			

			<div id="single-content"><!-- right-content -->
				

				<div id="video-section-container"><!-- video-section-container -->
						
					<div class="video-ads-top">
						<img src="img/thisisit.jpg">
					</div>
					<div id="view-video"><!-- view-video -->
						
						<video   preload="none" id="playingvid" autoplay  controls>
							<source src="videos/nobela.mp4" type="video/mp4" ></source>
						</video>

						<div class="selected-video-item-title">
							<h5>Video Title Sample Extreme most popular KSDJFLASDJFSFJSLDFJ Video Title Sample Extreme most popular dulo na sakto lang</h5>
						</div>

						<div class="selected-video-item-views-likes-dislikes">
							<span class="glyphicon glyphicon-eye-open">1M</span>
			                <!-- <a href="#"><span class="glyphicon glyphicon-thumbs-up"> 20K</span></a>
			               <a href="#"><span class="glyphicon glyphicon-thumbs-down"> 1K</span></a> -->
			               <button><span class="glyphicon glyphicon-thumbs-up">20K</span></button>
					       <button><span class="glyphicon glyphicon-thumbs-down">1K</span></button>
					       <a href="#" class="linkadd" onclick="void()">&nbsp; <b>+ Add to</a>
					       <button class="linkembed">&nbsp; <b>Embed</b></button>
						</div>

						<div id="modal-ads-container">

							<div id="modal-ads-content">
								<button id="close-ads-button">x</button>
								<img src="img/thisisit.jpg" />
							</div>
							
						</div>

						
						
					</div><!-- view-video -->
					
					<div class="embed-container">
						<h3>Embed Video</h3>
						<button class="close-embed">X</button>
						<!-- <a href="#" class="close-embed" onclick="void()">X</a> -->
						<textarea class="embed-text"></textarea>
					</div>
					
					<!-- comment-container -->
					

					<!-- <div id="ads-container" class="ads-on-selected">
							<img src="img/thisisit.jpg" />
					</div> -->
					
					<!-- related-views -->
					

					
				</div><!-- video-section-container -->
				


			</div><!-- single-content -->
		</div>

		<div id="footer-container">
			<div id="footer-links">
				<div class="links-container">
					<div class="links-header"><h5>INFORMATION</h5></div>
					<ul>
						<li><a href="#">Terms & Conditions</a></li>
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Link</a></li>
						<li><a href="#">Link</a></li>
						<li><a href="#">Link</a></li>
					</ul>
				</div>

				<div class="links-container">
					<div class="links-header"><h5>Work With Us</h5></div>
					<ul>
						<li><a href="#">Content Partners</a></li>
						<li><a href="#">Advertise</a></li>
						<li><a href="#">Model Payment Program</a></li>
						<li><a href="#">Webmasters</a></li>
						<li><a href="#">Link</a></li>
						<li><a href="#">Link</a></li>
						<li><a href="#">Link</a></li>
					</ul>
				</div>


				<div class="links-container">
					<div class="links-header"><h5>SUPPORT</h5></div>
					<ul>
						<li><a href="#">FAQ</a></li>
						<li><a href="#">Contact Support</a></li>
						<li><a href="#">Link</a></li>
						<li><a href="#">Feedback Forum</a></li>
						<li><a href="#">Sitemap</a></li>
						<li><a href="#">Link</a></li>
						<li><a href="#">Link</a></li>
					</ul>
				</div>


				<div class="links-container">
					<div class="links-header"><h5>OTHER LINKS</h5></div>
					<ul>
						<li><a href="#">Blog</a></li>
						<li><a href="#">Insights Blog</a></li>
						<li><a href="#">Link</a></li>
						<li><a href="#">Link</a></li>
						<li><a href="#">Link</a></li>
						<li><a href="#">Link</a></li>
						<li><a href="#">Link</a></li>
					</ul>
				</div>
			</div>
			<div id="copyright"><p>Projectx 2019 &copy;</p></div>

		</div>

	</div>



	<!-- THIS SHOULD BE PLANCED THE PART FILE OF THE FOOTER -->
	<button id="scroll-top-button"></button>

	<div id="login-container">
		<div id="login-window">
			<div id="login-close-button">x</div>
			<h4 id="window-title">Member Login</h4>
			<div id="login-controls-container">
				<form action="dashboard.php" method="post">
					<label for"username">Username</label>
					<input type="text" name="username" />
					<label for"password">Password</label>
					<input type="text" name="username" />
					<input type="submit" value="Login" />
				</form>
				<a href="#">Forgot password?</a> | <a href="#">Register</a>
			</div>
			<div id="login-footer"></div>
		</div>
	</div>
	

	<script src="js/jquery-3.4.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>


	 
	<script src="js/menu.js"></script>
	<script src="js/modal.js"></script>
	<script src="js/video-hover.js"></script>
	<script src="js/videodisplay.js"></script>
</body>
</html>