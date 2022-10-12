import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RecipeReviewCard from './Post'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function News() {
  return (
    <div >
      <Typography>
          News page
      </Typography>
      <Box>
        <Box  display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
        <Box gridColumn="span 2">
          <Item>
            <RecipeReviewCard />
          </Item>
        </Box>
        <Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box>
        <Box gridColumn="span 2">
          <Item>
            <RecipeReviewCard />
          </Item>
        </Box>
        <Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box>
        <Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box><Box gridColumn="span 2">
          <Item>
          <RecipeReviewCard />
          </Item>
        </Box>
        </Box>
      </Box>
    </div>
  );
}
