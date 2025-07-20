

normal = perturbNormalArb(-vViewPosition, normal, vec2(dFdx(vDisplacement), dFdy(vDisplacement)), faceDirection);
//normal = normalize(cross(dFdx(position), dFdy(position)));
