/*

## pyramid

### Instructions

Create a `pyramid` function that takes a string and a number as parameters
and return a pyramid constructed by the string passed as argument and with the depth
of the number passed as argument.

Just like triangle

### Output example

- '*' character and depth of 5 :

    *
   ***
  *****
 *******
*********

### Notions

- Loops or Recursion

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)
t(({ code }) => code.split('\n').filter((s) => s.trim()).length < 38)
t(({ code }) => !code.includes('$'))

t(() => pyramid('a', 5) === $5.slice(1))
t(() => pyramid('+', 10) === $10.slice(1))
t(() => pyramid('#', 40) === $40.slice(1))
t(() => pyramid('{}', 12) === $12.slice(1))
t(() => pyramid('ABC', 7) === $7.slice(1))
t(() => pyramid('<^>', 13) === $13.slice(1))

Object.freeze(tests)

const $5 = `
    a
   aaa
  aaaaa
 aaaaaaa
aaaaaaaaa
`

const $10 = `
         +
        +++
       +++++
      +++++++
     +++++++++
    +++++++++++
   +++++++++++++
  +++++++++++++++
 +++++++++++++++++
+++++++++++++++++++
`

const $7 = `
                  ABC
               ABCABCABC
            ABCABCABCABCABC
         ABCABCABCABCABCABCABC
      ABCABCABCABCABCABCABCABCABC
   ABCABCABCABCABCABCABCABCABCABCABC
ABCABCABCABCABCABCABCABCABCABCABCABCABC
`
const $12 = `
                      {}
                    {}{}{}
                  {}{}{}{}{}
                {}{}{}{}{}{}{}
              {}{}{}{}{}{}{}{}{}
            {}{}{}{}{}{}{}{}{}{}{}
          {}{}{}{}{}{}{}{}{}{}{}{}{}
        {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
      {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
    {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
  {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
`

const $13 = `
                                    <^>
                                 <^><^><^>
                              <^><^><^><^><^>
                           <^><^><^><^><^><^><^>
                        <^><^><^><^><^><^><^><^><^>
                     <^><^><^><^><^><^><^><^><^><^><^>
                  <^><^><^><^><^><^><^><^><^><^><^><^><^>
               <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>
            <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>
         <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>
      <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>
   <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>
<^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>
`

const $40 = `
                                       #
                                      ###
                                     #####
                                    #######
                                   #########
                                  ###########
                                 #############
                                ###############
                               #################
                              ###################
                             #####################
                            #######################
                           #########################
                          ###########################
                         #############################
                        ###############################
                       #################################
                      ###################################
                     #####################################
                    #######################################
                   #########################################
                  ###########################################
                 #############################################
                ###############################################
               #################################################
              ###################################################
             #####################################################
            #######################################################
           #########################################################
          ###########################################################
         #############################################################
        ###############################################################
       #################################################################
      ###################################################################
     #####################################################################
    #######################################################################
   #########################################################################
  ###########################################################################
 #############################################################################
###############################################################################
`
