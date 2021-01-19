import React from "react";
import psuedocode from "../assets/psuedocode.png";
import charcountstep4 from "../assets/charcountstep4.png";
import alphanumeric from "../assets/alphanumeric.png";
import charcountstep5 from "../assets/charcountstep5.png";
//
function ProblemSolving() {
	return (
		<section className="blogs">
			<div className="wrapper">
				<div className="blog">
					<div className="titletaganimation">
						<h1 className="title">The process for solving coding problems</h1>
						<div className="taganimation">
							<h4 className="hashtag">#github #sitehosting</h4>
							<div className="boite">
								<div className="cercle3"></div>
								<div className="cercle3"></div>
								<div className="cercle3"></div>
								<div className="cercle3"></div>
							</div>
						</div>
					</div>
					{/* collapsible starts */}
					<div className="content">
						<div className="blogbody">
							<h2 className="focus focusdifferent">Preamble</h2>

							<p>
								There is a thick line between regular programming, and
								competitive programming. In regular programming, you learn how
								write code, and then you build things. During this process, you
								are bound to learn how to solve problems, but this is a skill
								that you learn indirectly. Building projects improves your
								logical and critical thinking skills; and as you build, you'll
								inevitably find yourself thinking in a more systemtic manner. On
								the other hand, in competitive programming, you are totally
								focused on 'solving problems'. Here, we are dealing with 'math'.
								You are given a problem and you have to solve it using some type
								of an equation (algorithm). In order to succeed in this field,
								you must first learn the equations (algorithms) and then you
								must practice the problems. The whole process is truly exciting.
								If you want to work as a developer for a FANG company, then you
								have to learn comptitive programming. This means that you have
								to develop, and refine, your problem solving muscles. Below is
								the general process for solving problem. Enjoy.
							</p>

							<p>Follow these steps to solve coding problems</p>

							<ol>
								<li>Understand the problem</li>
								<li>Explore concrete examples</li>
								<li>Break it down</li>
								<li>Solve/simplify</li>
								<li>Look back and refactor</li>
							</ol>

							<h2 className="focus">Step 1: Understand the problem</h2>

							<p>Ask the following questions to understand the problem:</p>

							<ol>
								<li>Can I restate the problem in my own words?</li>

								<li>What are the inputs that go into the problem?</li>

								<li>
									What are the outputs that should come from the solution to the
									problem?
								</li>

								<li>
									Can the outputs be determined from the inputs? In other words,
									do I have enough information to solve the problem? (you may
									not be able to answer this question until you try to solve the
									problem; but its still important to consider this at an early
									stage).
								</li>

								<li>
									How should I label the important pieces of data that are a
									part of the problem?
								</li>
							</ol>

							<p>
								Suppose that we have to solve this problem: Write a function
								which takes two numbers and returns their sum.
							</p>

							<p>
								Now let's answer the aforementioned questions, to further
								understand this problem.
							</p>

							<ol>
								<li>Can I restate the problem in my own words?</li>
								<ul>
									<li>Implement addition</li>
								</ul>

								<li>What are the inputs that go into the problem?</li>
								<ul>
									<li>
										Are they always integers or can they be strings for large
										numbers?
									</li>
									<li>What if you want to add more than two numbers?</li>
								</ul>

								<li>
									What are the outputs that should come from the solution to the
									problem?
								</li>
								<ul>
									<li>Are they integers or strings ?</li>
								</ul>

								<li>
									Can the outputs be determined from the inputs? In other words,
									do I have enough information to solve the problem?
								</li>
								<ul>
									<li>
										Yes they can, but what happens if someone only passes in one
										number (add zero, return null, etc)
									</li>
								</ul>

								<li>
									How should I label the important pieces of data that are a
									part of the problem?
								</li>
								<ul>
									<li>Name of function: 'add'</li>
									<li>'num1' and 'num2' will be the arguments</li>
									<li>'Sum' is the result</li>
								</ul>
							</ol>

							<h2 className="focus">Step 2: Explore concrete examples</h2>

							<p>
								If you try to make the problem more realistic by using concrete
								examples, then you will be forced to ask more questions about
								the problem. Asking better questions clarifies the nature of the
								problem. These examples are another way of understanding the
								problem better before you tackle it.
							</p>

							<ol>
								<li>
									After restating the problem in your own words, write down two
									or three simple examples with an input and output; the easies
									use cases.
								</li>
								<li>Progress to more complex examples</li>
								<li>Explore examples with empty inputs</li>
								<li>Explore examples with invalid inputs</li>
							</ol>

							<p>
								Suppose that we have to solve this problem: write a function
								which takes in a string and returns counts of each character in
								the string.
							</p>

							<p>
								Now let's use the aforementioned steps, to further understand
								this problem.
							</p>

							<ol>
								<li>
									After restating the problem in your own words, write down two
									or three simple examples with an input and output; the easies
									use cases.
								</li>
								<ul>
									<li>Further questions about the problem:</li>
									<li>
										Should the result only return the letters that are in
										string? What about the letters that aren't there?
									</li>
									<li>
										If every letter was already set to 0, then we won't have to
										return a letter everytime the same letter appears. Instead
										the count for that specific letter would just increase by
										one, whenever the letter repeates itself.
									</li>

									<li>Here are two simple examples:</li>

									{/* Insert images instead of li elements below */}

									{/* <li class="code">charCount("aaaa")</li>
									<li class="code">{a:4}</li>

									<li class="code">charCount("hello")</li>
									<li class="code">{h:1, e:1, l:2, 0:1}</li> */}
								</ul>

								<li>Progress to more complex examples</li>
								<ul>
									<li>Further questions about the problem:</li>
									<li>
										Do we want to account for spaces, numbers, dashes, etc?
									</li>
									<li>
										Do we store uppercase and lowercase letters differently or
										do we ignore cases?
									</li>

									<li>Here is a more complex example:</li>

									<li className="code">"my phone number is 416-222-3455"</li>
								</ul>

								<li>Explore examples with empty inputs</li>
								<ul>
									<li>
										If someone passes in an empty string, then should we return
										an empty object or "null" or "undefined" or "error"
									</li>
									<li className="code">charcCount("")</li>
								</ul>

								<li>Explore examples with invalid inputs</li>
								<ul>
									<li>
										What if someone passes in something that isn't a string
										(like: a number)
									</li>
									<li className="code">charcCount(22)</li>
								</ul>
							</ol>

							<h2 className="focus">Step 3: Break it down</h2>

							<p>Explicitly write out the steps you need to take.</p>

							<p>
								This forces you to think abut the code you'll write before you
								write it, and helps you catch any lingering conceptual issues or
								misunderstandings before you dive in and have to worry about
								details.
							</p>

							<p>
								In interviews, writing out the steps in psuedo code is very
								important because it demonstrates that you can formulate an
								approach under pressure.
							</p>

							<p>
								Also, alot of interview problems are very complex and many
								applicants end up running out of time. With this in mind, if you
								write out the pseudo code, and then run out of time after
								writing out the actual code for only half of the steps, then
								your pseudo code will determine whether you'll get the job.
							</p>
							<p>
								In other words, if you already wrote your psuedo code, before
								you started coding the solution (and then you ran out of time),
								then the interviewer can use your pseudo code to judge the
								soundness of your incomplete code.
							</p>
							<p>
								However, if you didn't write the pseudo code, before you started
								coding (and then you ran out of time), then the interviewer will
								percieve your code as simply incomplete.
							</p>

							<p>
								At this point in the example, and to make things simpler, we've
								decided that were going to turn all uppercase letters into
								lowercase letters and then count them. Below is the psuedo code
								for this problem.
							</p>

							<img
								//
								src={psuedocode}
								alt=""
							/>

							<h2 className="focus">Step 4: Simplify and solve</h2>

							<p>Follow these steps to simplify and solve your problem:</p>

							<ul>
								<li>Find the core difficulty in what your'e trying to do</li>
								<li>Temporarily ignore that difficulty</li>
								<li>Write a simplified solution</li>
								<li>Then incorporate that difficulty back in</li>
							</ul>

							<p>
								We are now going to insert actual code that matches our previous
								pseudo code:
							</p>

							<img
								//
								src={charcountstep4}
								alt=""
							/>

							<h2 className="focus">Step 5: Look back and refactor</h2>

							<p>
								Refactoring is the process of restructuring (the source code of
								an application or piece of software) so as to improve operation
								without altering functionality.
							</p>

							<p>
								To refactor efficently, think about the following questions?
							</p>

							<ul>
								<li>Can you check the result ?</li>
								<li>Can you derive the result differently ?</li>
								<li>Can you understand it at a glance ?</li>
								<li>
									Can you use the result or method for some other problem?
									<span>
										One of the benefits of solving a problem is that it helps
										you develop an intution for solving other problems. So
										whenever you write down a solution, its worthwile to think
										whether there are any similarities between this problem and
										solution, and other problems and solutions that you've
										encountered in the past.
									</span>
								</li>
								<li>
									Can you improve the performance of your solution ?
									<span>
										We can use time complexity and space complexity to find out
										ways of making the solution better. So you have to be
										comfortable measuring and calcuting these complexities. Try
										to identify things that are making the solution slow such as
										nested loops.
									</span>
								</li>
								<li>
									Can you think of other ways to refactor ?
									<span>
										If your'e working for a company, does you code follow
										company style guides? Does it follow the language
										conventions? Is the spacing consistent? In an interview
										setting, you should show that you acknowledge that your code
										isn't as neat as it could be, and that you'd prefer to make
										it neater if you had time.
									</span>
								</li>
								<li>
									How have other people solved this problem ?
									<span>
										You should ask this question, to the interviewer, after
										you've completed the problem.
									</span>
								</li>
							</ul>

							<p>The following items were refactored in this step:</p>

							<ol>
								<li>The for loop was simplified</li>
								<li>
									The regular expression was replaced with an alphanumeric
									function.
									<span>
										So far, to test whether a character is alphanumeric we used
										the regular expression [a-z0-9]. Even though regular
										expressions are very useful, sometimes their performance can
										vary based on the browser that youre' using. To avoid any
										potential hiccups, we are going to write a seperate function
										that will check whether a character is alphanumeric or not,
										and then we will call that function within the charCount
										function.
									</span>
								</li>
								<li>The lowercase statement was simplified</li>
								<li>
									The if/else statemenets were compressed into a one-liner
								</li>
							</ol>

							<p>
								The below 'function isAlphaNumeric' checks to see whether a
								character is alphanumeric.
							</p>

							<img
								//
								src={alphanumeric}
								alt=""
							/>

							<p>
								The below function 'charCount' counts all the characters in the
								string. It calls upon the 'isAlphaNumeric' function, to make
								sure that non-alphanumeric characters get removed.
							</p>

							<img
								//
								src={charcountstep5}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProblemSolving;
