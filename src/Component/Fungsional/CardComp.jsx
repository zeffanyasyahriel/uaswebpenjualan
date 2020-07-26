import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';


function CardComp(props) {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEhIVEBAPEhUQDxAVDxUQFhAPFRUWFhcSFRUYHSggGBolHRUVITEhJSktLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0fIB8tLS8vKy0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLf/AABEIAMIBAwMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABSEAABAwICAwgKDQkHBQAAAAABAAIDBBESIQUxUQYTIjJBYXGBBzNSVHJ0kZOh0RQVQlOUsbKztMHCw9IlNDZiZHOChPAWIzVEkqKjCCQmQ/H/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAA0EQEAAgIABAUBBgUEAwAAAAAAAQIDEQQSITEyM0FRcSIFE0JhgfAUUqGxwSM0kdEkcuH/2gAMAwEAAhEDEQA/AO4oCAgICAgwtM6SjpoX1EpsyJuI2zJOoNA5STYDpSI2OTad3c1chxNcYGHixRkAgfrSWxOPRYc3KtoxxHdnztcduqrPf5fhEv4lblhG5UndTWe/y/CZfxJyx7G5ef2qrPf5fhEv4k5Y9jak7q633+X4RL+JOWDag7rq336X4RL+JOWDbwbr6zlml+ES/iTlg3Kh+7Wrt2+XV3xKftf1ZVtyxCY3K1Buvrjrqag9ErwOXa7m2K2PDlvG61WmYjuujddW+/1Hnz+JX/hM38qOap/a6t9/qPPu/En8Jm/lOaA7rq33+p88fxKJ4XNH4TdWE/dxXj/Myjpkk/Eued71pbT1u7avP+Zl85Jf5SbnetHRmt3V13v9T58j7S3/AIfNPXlNQrG6ivOqao+EH8Sfw2b+VW0xWOaezJj01pN0jYhJUmR/Fb7I18/GVcmHJjrNrRqIMFq55mMfXS5pLdFpihLTJLNEXZgSOZO1wBF7i7gB1Lmw56Zomaddd2tsdqxuYdK7HO7xukA6GUBlVE0PIbk2WMm2NoOYsbXHOM9drz+SrelAICAgICAgICAgICAg0DsxTkU9PGNUtU3FzhrHuAPXhPUFfH3Vt2c10vktmSCqakA4W6x7rujy22BV5l9MV1afr5dSjmTpchqwThI15tP1EX5VMW6omGe6ik3vft7dvROHfMPBxbL7VPNG9eqNMUhShSUFmWAWJ2ua3q4biP8AaEx0i+atZX7V2kY6yFhbhp2vDWuDxK7HjJDbOyAAsQchtXs8k61vTLaPP9BaKvWhFtKwFC0QtT0gdnfC7auXiOGjJ1jpK8SqpKMMzvd23YOZRh4aMXWZ3KWdFGSQBrJsFtadRtalJtMRDP0bCHyuA1RtHpN7Hqt5VFLMftCvJTlhuO5aJomlq5MmUsTYwdkhGI/V5V4v29lt93XBXvZt9kYJik6/FOv0Qml901PVus+kDpHPEMU5kdwWYgeJq1fGr8LwU8Lw3f06u687zxSJ3H72j+xu7e9JU7m5AzSRkbWPjBDejhHyLKY1Mw5uIpFckxD6KVGQgICAgICAgICAgICDm3ZudaGkP7WPm3rTH3Uu55pZ4PkzC2ZtaqInh1wbAnMW5bk5ZcpN+tZzE76LxpgOpJr34Oq1sfJ5NqryytzQzKKlcXhz3cTOwGs3uBlqF7Hq1KYiZnqrMx6NgfpmY07aQuG8MdiDcABuTe2LXa6tyRvaNz2RpVkKCgTcQfvB8Ui04bz4/Vf8ErS9rUsHoULQuAKE6VAKFlQChaIVgKFtL0MoYcWwG3SsMs9NPQ4GkRvLPaIZW5WTtjj7q5J6f/ivj8LxePvNqxb3nac01V73o+KJps+tllmfzxhxaPQAvLjH9/x9rT2pGv1ezwExh4aLfl/fq1inhwyQt2OxHqzPxLv4vphsw4KZvxG0j2P/AM/pvGQf+Nq8vJ45+EcT5kvoxZMRAQEBAQEBAQEBAQEHNOzh2mk8b+7etMfdS7mWmXWNxyLVRhQy4unlQXbqUvCiFtzgoFp0wRK06YoLkh4A8MfJkV+G/wBxC0+GUzufdeCtjLWECl34OLAXCRs0DQQ/WBZxy516eWPqpP5/4lnCe0THG+ABrqf2HFRyOronBnsgVQDw2QXGPj71hINrXCwybi09+aZ6e2v7Lw0toXZsVgKExC40KNphW0Kq09mPW5NcduFg6XcL4h6VyWvzTr5elk/0uE17/wCWfo1pjgxcshB6g8eorsx6iP3++nd4HFfVNaR6a/quaVrA6cRA3bSxsp28+ADGf9eJcvBY5+7nJPe883/X9HpcZlrjxxir6PKaMvmAbrbFK4dO9uA9JCj7QtFMPX1mI/qn7H1bJLL3Cge2NPbV7JFuje229Fl5+WvLeYn2hTLfnvM/nMf8dH0SsVBAQEBAQEBAQEBAQEHNuzcP7mk8a+7etMfdWzl2m1qzhDsfbMIsyTUHYiqh0hQWyUSpJRKklEMl3Eb4Y+TIr8N/uK/qtPhSmiYqgMlMUD5GTxGB7xC94aMbHmzmiwcCwL1Mk03HNMdJ2pCiKWUU72NjIhfI108oY7hObxInv1AAm+Ha4JPLzxMz112/ymGIAtErgCrMrQqAVVohU4WBOwH4kTMfTK9uvpd5bC333FKOdgaxrT8a8bg8k5LTPt0/vLu+0bxNKVj99GXWPwRtA1wtB5hhDbk/xEjyr1r+GK+7y+Fx/eZ7XntSd/06f9tb0e7h3PXddNK6jTl4i82nbMpKt++O3vJ0oMDTsDyAbLm4jFXLMVt2idu/gsn3GC+SfZsW5OMN0rCwam1LGjoELB9S8zi5/wBe36ObhZ3iiZ95fQS5XSICAgICAgICAgICAg5v2bO00njf3b1pj7q2cu0+M1qzhCBFl0oq8JRLxoubHVrPPzIK3Fo1AZasggx5COREsocRnhj5Mitw/nwn8LZ9x0jo5mMIlZ7NDoKaZsmERSPO9umawgte4XtyEC512XocRq1dx+HuiEnSOc32NDiO9nRlVjYHHA53/c3cRqObWm55QFlOtWn15o/x/wDVmntau2TSsBUW0uNCLRCotyI2ghQm0fTK3pLSRqnU2Ifm1O2J/wCsWEk+UWHSVxcJwcYrX16zMqcVmreKcvfX9WRpN2CHA48OY75J0Z4R6SetdmP68m/ZNv8Ax+G162a+2+oLsnpDy6ROS0Q2vcRorHIZiODALDnmcPqHxrlvblj5a/aGaIpGCv6s3c8LaYjH7Uz5li8jivOt8NuG8qHfVzOgQEBAQEBAQEBAQEBBzfs2dppPGvu3rTH3Vs5duh5CtVIQTSiV0lEaeEol4123UgsPLjq8t0Rp4Mh0IlnN4jP3g+TKrcP58LfhlsejjWsiwwvc2KW7sDXAa8TSRfNpOB2Y5Gr0r/dzbdu8EK8FdFF7Hu9sDnb2GhzcJL3WLWu1gOI1AgFRvFad+oxvaWfuAcg4EPbwmn3QuQbZnPmOxT97X1laIVz6HmYCXMs1psXYha4tqN88yPKojLSe0rRDyq0dJEAXgWcSGkG4JGvo61MXiey0LIClbXSVimgbCDLJqJu0d0L5AbT/AFsS0ekeri4eItPPfw1/qiq6tdK8udy6hsGxb4oisahXib2y23K7Rwl7mxsGKR5DWjn2nmVrT79mMTGKvN6ut6H0Y2CBsQzsLuPdPObndZXn5L7vtwRu080tV0M22mmD9qj+YjXBxHmz8PW4byod6XO6BAQEBAQEBAQEBAQEHN+zZ2mk8b+7etMfdWzl+ncx6fItVIQLdaJVXQeFyChzkFJKCglBIM4rP3n2ZVfh/Phb0T9EynwBz5pGvtxWXydiyGqwsCTr90dXL6NubfSCIXK6WPARHPK+7wMLyTdoLiDq1A2Iz92chbOKxO+sQsw21MmvfH32747m5+YeQK/LHstEPTM85FziNhe4/GeYeRRqPZeIXHyOdxnOdrPCcXZnWc1GohaIWqipbGLuzvm1nK4/U3apjp1c2W/P9MdvX8/yQdZVOldieb7ByAbAFHMy30iPSGOVpSdIb72PtGAYpnC7zk39VvL1quW060483V0GNvBXDbuzirRNGi2nGj9qi+jxrkzT/qT8PRweXHy7usW4gICAgICAgICAgICDmXZukOCjZbJ1Q51+drLAf7j5Fpj7q2c10wtVIQAGdtiJeEoPEHroX3w4HYteHA69ttrKNwKN7dmA1xI1gNJI6RydabFvCbE2NhrIBIHSeRBIwcWP959mVX4fzo/VaOzNDV6y0QuNChbS40KJWhca2+rWqrdmPWaQbHwW2fIOXW1h5+6PMp7dWN8u+lUJJIXEuccTjrJ1lUmdsFICREz2IiZSFFQkkE+RaxqrSuKZdH3Lx4WWWF7blhnpqW0U+YXNfu5tNAjfg06CBe1XTtt4UELb+lcuTxz8O3D0pDvKxbCAgICAgICAgICAgIOX9nA5UX75/wAkLTH3Vs5vpkrVSEHLrvtCJWSUGTout3mVktsWC+V8J4TS27TyOF7g8hA2KJjYmIt0EYhkhx1GYu2UzgzEukjLmh4Fmssy+HlxFRqd7Sx59OsfC2MunaWPFi2az5GhgAdK61iblw5gAo1qRjP05dweWvaWOJDGSYY33cXXkbbM55nl5k0LdPxY/D+zKteH86P1WjskmheqvEK2hQsutblckBo4zjkAOdR1kveKx1R1ZpAm7I7tbqLjk5/4W82vbsV+XlZ8l79Z/wCEdhVZhWaaVwUznmwHWqa900w2v2TdHojDmcyom/s7K4Iqk6emss5svWsNr0O2zQFSJ28/i46tgpCqXcOnPp/8cHjlL81Triv45+HXj8EO9rNqICAgICAgICAgICAg5p2boxvdI7lFSWjM8UsJOX8IWmPurZy/TJWqkInBiyQUOpTyH6kFp1M7Z6USsuaRrBHUoFpzlA8KJS9Hqi8P7Eqvg86P1XqlWheq0iGbo2gfPII2WvYuc45NjYNbnHYomYrHNPZhmzckxSvW0+j3R8scrHBzReN9iATwByOtyg6786zvM76S6cE03u0dWPpKgDdWYOrJMeTfd22pHotaN3PSSnMWapvmiOyv3ET1s26k3Ptjbq9C5LZZs03FY1CmaksrRO2drLTKdTMqRZM6PFkq4eK7pyiKrdxTHVozYw7dBhOY9lU512zFNC4ekBcVvFLpx+GHdVm0EBAQEBAQEBAQEBAQc27NvaaTxr7t60x91bOWaYWqkIqM8K3MhK/dSgugpJRMLTmg6xfqUJWHwNPJ5MkGbTNtvY2P+xIpw+dDSiWAXpttJ+B+9aOle3J88whc7lDGgOw+n0qk/VlrX0iNuOY5cuS/rERpqkD3RvEzMy3J7OSSM8ZvkW2Wm42zw3mstw0PTCZgkjcJI+S44TeYjauK/R7GLNMV16Nq0dSADVZc1lrZJllVMeSirPmQtRFmtqotZjiFWVrbTJpxYq9XLxHWUxRnNVs5WlQ/pD/MwfRIlwX8Uuinh07mqLiAgICAgICAgICAgIObdm7tNJ41929aY+6tnK9MFaqQhY3cIdKJZilV4SgpJULLZKCgoMun1x+H9iRTh86GuNLtC9OXRpLUI3ynnp+WzaiMfrR3DwP4XX/hWczy3i376ssuPc/Ma/zDW432dhK7O8PO8M6ln7ndKmjqBc/3Ex4Q5AVy5sfNH7/V04cnLPLLrcABs5pu1wuDzFedLt29qW5KISiZWLWqtpWxErs+ZQRYq9XPlnaRo3ZhVsz002H9If5mD6JEuG/in4bV8LuizWEBAQEBAQEBAQEBAQc27N3aKXxr7t60x91bOT6aK1UhCgolnKUaeEqEqHFBQSgpcUGXSHhReGfkSJi86GuPunGhek6ohlUU5je2RuthvY6nDlaeYgkdarMbjUk13CL3VUYikxM7W6z4ztjcLjyZg84K2xZJmv5vPz1je/dhXEsdvdDVzFXmOaOjn3MOh9jbTe/RmmkP95DxdpbyhedxNNTz/vb0MV+arcZxkudqjZGrWqlpUhqu55tphVHGWkdmMztmUjtSpZeIahT/AKQ/zMH0WJcOTxz8NI7O7LNYQEBAQEBAQEBAQEBBzXs39opfGvu3rTH3Vs5Lps+taqQhiUSzmuyCDwlBSSgocUFBKDNouNF4Z+RImPzobYu7YGhei64hcaFC2lzSEG/Uxb7uC7m88TjwvI4g/wARUY7atv3c3EY9xLTqeUsd6Ctq25bcrz7RuNpSjrnU07KlhyBGPo/oqctNx19U4MnLbTtVPVNmibKzNsgxDm2heTqazqXo+nRjSNWtWN1FlpDktZGVR4S1UrO2VTO1LKzoiGp0n6QjxmD6LEuLJ45+F3d1kkQEBAQEBAQEBAQEBBzXs39opfGvu3rTH3Vs5Fpl2a1UhDXUJZsLuCFI9cUFBKClyCglBIaP48Xhn5EiY/Nhth7tjAXe7VbQoSyKd+EgkXGpw7phFnDyEqC1dw1DT9FvUrhrF7tO0HMHrBB61pf6qxaHlXry20ooZQ5uA55ehbY789dS57Ryztv3Yy0yeFQyHMcKIn4lxcTj/E7sF+aNNzkWNJTljosuK2q4MiIq38Ja6MbKp3aljZ2Vhq1Cf/IB4zB9FiXDk8c/CZd5WYICAgICAgICAgICAg5l2dX2p6Xnq7f8b1pj7q2ch0uc1qpCIuqpZdMeD0Eq0C4SgoKCi6CgqJElozjxeGfm5Ex+bDfB4mzALvdq40KFtLjQqrI7dNTY4hJyx8A+Ablp+UOsbFtincTV5/GY9fXDTo5MLr7FlW00s45jcaTEVSY3R1MZ4Ubg7+G66smrRtXFPLPw67BXtmjZO3iyNBI2OtmF5sxy25XpTEWruHksmS3q8zLXqhqmThrWeycUMymfqWFnXWGt6OP5fb4zD9GiXDk8c/CLd3e1mCAgICAgICAgICAgIOW9n782pPHPupFpj7q2cj0nmtFIRJUJZNI7I9KmBeJUihxQUIKCVEiU0V2yLwz83ImPzYb4PFDaQF3O/S40KFlxoUJiFRjDgWHivBaevl+JItqdqZcfPSYc70hAWPLTrabFXzRHNuHix7MnRU2uM6jq+taYbRMcsotHXcNw3C6SLDJRvOV8cV/q6llnp037O3hr9eVsstRlZUp1V4jF1Rhku5bzHRzVjSSp3alhaHVVAaKP5eb4zD9GjXDk8c/Ctu7vqyQICAgICAgICAgICAg5Z2f/AM2pPHPupFfH3Vt2cj0itVIRxF1CVdPkSFMC6SpFJKChxUSKVAldEdsh8M/NyJTzYdHD+KG2gLtegrARK40KFlYCjY1XdjR2c2Uf+wWPhDlWvip8PJ4vHyZN+7WmPIII1tN1lW2p2502agje6lmRYQHdC67TFo37rVnl+qPRvRqhIwSDU8X61yxHLbT071jJSLMNjs1u4Jr1SlO/UsbNqoTQx/LzfGYfo0a4Mvjn4Uv3fQCyVEBAQEBAQEBAQEBAQcs7P/5tSeOD5p6vTurZyLSC1VhHhQKZH8ikeCQ7VI930oG+KB5viaE1obtkPhn5uRKeZDo4fxQ28Bdj0VYCjaYVgKFlYCgYOnaTfYXN1kDG3pHItMVtW1Lm4vHz4+neHO3ZFUmOWdS8iOsbZ+iZb4oXcV4y6Vtitv6ZaU9mybk6w4XQOObDkoyR036w7eDv0mkpMmzlNZ6M8saskaZypYqidBn8us8Zh+jMXn5fHPwpfu+glkqICAgICAgICAgICAg5Z2f/AM2pPHB809Xx91bOQV61UhHk2zUJWbqwXQLoF0HuFBO6D7bD4R+bkVaebDo4bxw3MBdj0lYChZWAoFSqCnaO7nOn6TepXN5L3b4JzC1y9dWj1eHenJaa+zAY8ghw1hUrOpiYVTNLVYJmSjU/jdIXXMbn/wBoa1vy3izbJHZg7c1jR28R3i3uzaZyizKsIzc+fy4zxmH6Oxefl8c/DPJ4n0KsVRAQEBAQEBAQEBAQEHK/+oD82pPHB809Xx91bOQ161VhEyuz6FCdKbqdmi6GlQapFYAChDwuQTuge2w+Gfm5FWnmQ6OG8cN1AXY9PSsBQlUokFAINX3aUtw2UeCfjC2r9VJj2eZx1NWi36NPas3GyIn8G3K03C2rbdNesJ9NNw0XU44mnlGS0t33Hq66358fwmKZyztC1Ufub/xxnjMX0dq87L45+GeTxPodYqCAgICAgICAgICAgIOXdn+M+xKZ3uW1jcR2Xjksr07q2cd0kbDqWqsIZQlUG9SC42wRAXIKS5BTdBI0mkBCYZDqjkaXbcBD2m3+r0Km+W8S2w25bRLolPK17Q9hD2uFw5puCOpdkTvs9WJiY3C8ApW1Io0aksmjUlk0alhaapt8he3ltcdIWmKdW+XLxdJtin8urmkgs4qlo1bTytq43WPSphCc3O1FiWdYXTTrX4XxW1aY926SV0LYRcCMsDS55AaAQOES6+d8suZY23HWXVX3QHY/rRUaYikaDZ9SXNB14I4gAfIF517c1pllady+k1mgQEBAQEBAQEBAQEBBA7ttzza+kkpScLnWdE8i+9zNN2OPNfXzEqYnUol86bptDVFKd7qInRPBwi/Ffb3TH6nA68uuy3iYlTTXhG/uT6E0GF/c+kKNBgk7kqdSPN7f3JTQ8wP7n0hNBvT+5PoUCowuc0tc0juTcKtqzPVaJWadkzMo5Sy+sNlLM+cBU6x2Xi0x2lkb7Wd8SfCX+tN2Tz29wTVnfEnwl/rTmsc9vd7v1Z3xJ8Jf605rHPb3eGas74k+Ev8AWnNY57e7zfaw/wCYkP8AMP8AWnNb3km9vdjPo5jmXZ+GUm1p7zKmoeewpe6/3pzWOitlNOMw8jnEpCmL3j1k6DoZ5CGOe6QnisxukJOwN1kqJm0907dw7C+4KWmcK6pYY5A0sp4ncYB+T5HD3OWQGuxN1E9B2BQCAgICAgICAgICAgICC3IwEEEAjYRcIMZ2iKc5mniJ2mFh+pB6dGQEYTDEWjU3emWHVZNoU+01N3vD5hnqRIND03e8PmWepBWdHQnIxRkbN7b6k2hR7TU3e8PmGepNpPaem73h8yz1Jse+1FP3vD5lnqTY89p6bveHzLPUge09N3vD5lnqTYe01N3vD5hnqQejQ9N3vD5lnqQDoim73h8yz1IPPaem73h8yz1IPW6IpxmKeEEaiIWAj0IDtEUxzNPCSdZMLDf0ILsVHHHxI2M8FjW/EEF9qD1AQEBAQEBB/9k=" alt="Card image cap" />
                <CardBody>
                    <CardTitle><h3>{props.judul}</h3></CardTitle>
                    <CardSubtitle>{props.tanggal}</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>
                        <Link to = {
                            {
                                pathname : '/detail/$(props.id)',
                                state : {
                                    judul: props.judul,
                                    tanggal: props.tanggal
                                }
                            }
                        } >Detail</Link>
                        </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default CardComp